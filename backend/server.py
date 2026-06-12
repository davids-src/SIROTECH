from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import smtplib
from email.mime.text import MIMEText
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="SIROTECH API")

api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ── Models ────────────────────────────────────────────────
class ContactCreate(BaseModel):
    company: str = Field(..., min_length=1, max_length=200)
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    interests: List[str] = Field(default_factory=list)
    message: str = Field(default="", max_length=5000)


class ContactMessage(ContactCreate):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    email_sent: bool = False


# ── Email (SMTP) ──────────────────────────────────────────
def _send_email_sync(record: ContactMessage) -> bool:
    """Send notification email via SMTP. Skipped when SMTP_HOST is not configured."""
    host = os.environ.get('SMTP_HOST', '').strip()
    if not host:
        return False

    port = int(os.environ.get('SMTP_PORT', '587'))
    username = os.environ.get('SMTP_USERNAME', '').strip()
    password = os.environ.get('SMTP_PASSWORD', '').strip()
    sender = os.environ.get('SMTP_FROM', 'noreply@sirotech.hu')
    recipient = os.environ.get('CONTACT_INBOX', 'info@sirotech.hu')

    body = (
        f"Új kapcsolatfelvételi üzenet érkezett a sirotech.hu oldalról\n\n"
        f"Cégnév: {record.company}\n"
        f"Név: {record.name}\n"
        f"E-mail: {record.email}\n"
        f"Érdeklődési terület: {', '.join(record.interests) if record.interests else '-'}\n\n"
        f"Üzenet:\n{record.message or '-'}\n\n"
        f"Időpont: {record.created_at}"
    )
    msg = MIMEText(body, 'plain', 'utf-8')
    msg['Subject'] = f"[sirotech.hu] Új megkeresés – {record.company}"
    msg['From'] = sender
    msg['To'] = recipient
    msg['Reply-To'] = record.email

    with smtplib.SMTP(host, port, timeout=15) as smtp:
        smtp.starttls()
        if username:
            smtp.login(username, password)
        smtp.sendmail(sender, [recipient], msg.as_string())
    return True


# ── Routes ────────────────────────────────────────────────
@api_router.get("/")
async def root():
    return {"message": "SIROTECH API"}


@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact(data: ContactCreate):
    record = ContactMessage(**data.model_dump())
    try:
        record.email_sent = await asyncio.to_thread(_send_email_sync, record)
    except Exception as exc:
        logger.warning("Contact email could not be sent: %s", exc)
        record.email_sent = False

    await db.contact_messages.insert_one({**record.model_dump()})
    return record


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
