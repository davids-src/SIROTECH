"""Backend API tests for SIROTECH /api/contact endpoint."""
import os
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://corp-hub-preview.preview.emergentagent.com").rstrip("/")
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "test_database")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def mongo_collection():
    client = MongoClient(MONGO_URL)
    coll = client[DB_NAME]["contact_messages"]
    yield coll
    # cleanup test records
    coll.delete_many({"email": {"$regex": "^test_"}})
    client.close()


class TestRoot:
    def test_root_api(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert r.json().get("message") == "SIROTECH API"


class TestContact:
    def test_contact_valid_payload(self, api_client, mongo_collection):
        payload = {
            "company": "TEST_Acme Kft.",
            "name": "Teszt Elek",
            "email": "test_valid@example.com",
            "interests": ["IT", "Security"],
            "message": "Érdeklődés a szolgáltatások iránt.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["email_sent"] is False  # SMTP not configured
        assert data["company"] == payload["company"]
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["interests"] == payload["interests"]

        # Verify persistence in MongoDB
        record = mongo_collection.find_one({"id": data["id"]})
        assert record is not None
        assert record["company"] == payload["company"]
        assert record["email"] == payload["email"]
        assert record["email_sent"] is False

    def test_contact_minimal_payload(self, api_client, mongo_collection):
        payload = {
            "company": "TEST_Minimal",
            "name": "Min User",
            "email": "test_minimal@example.com",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["interests"] == []
        assert data["message"] == ""
        assert mongo_collection.find_one({"id": data["id"]}) is not None

    def test_contact_invalid_email(self, api_client):
        payload = {
            "company": "TEST_Bad",
            "name": "Bad Email",
            "email": "not-an-email",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_company(self, api_client):
        payload = {"name": "No Co", "email": "test_nocompany@example.com"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_name(self, api_client):
        payload = {"company": "TEST_NoName", "email": "test_noname@example.com"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422

    def test_contact_empty_company(self, api_client):
        payload = {"company": "", "name": "X", "email": "test_empty@example.com"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 422
