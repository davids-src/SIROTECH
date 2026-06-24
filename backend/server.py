"""Minimal FastAPI stub.

The SIROTECH site uses Next.js Route Handlers (under /server/*) for all
backend logic. This file only exists so supervisor stays happy.
"""
from fastapi import FastAPI

app = FastAPI(title="SIROTECH (stub)")


@app.get("/api/health")
async def health():
    return {"status": "ok", "note": "Backend handled by Next.js route handlers under /server/*"}
