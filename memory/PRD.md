# PRD — SIROTECH Corporate Website (sirotech.hu)

## Original Problem Statement
Umbrella brand website for SIROTECH Informatikai és Biztonságtechnikai Kft. that unifies sub-brands (SIRONIC – IT ops, SIRO-VÉD – security systems, SIROSOFT – software dev) under one corporate identity. Dark, premium, technical aesthetic. Hungarian primary, English toggle. Funnels visitors to sub-brand pages or contact form. Full spec provided in YAML (brand colors, typography, sections, motion rules).

## User Choices (clarified 2026-06-12)
- Stack: React + TS + Next.js + Tailwind (user explicitly requested Next.js)
- Contact form: Nodemailer-style email → implemented as FastAPI SMTP (env-gated) + MongoDB storage, because /api ingress routes to FastAPI backend
- Logos: placeholders created in `frontend/public/logos/*.svg`; user will replace files later
- Phone / tax number: placeholders ("+36 ..." / "Adószám: ...")
- Quote calculator: OUT OF SCOPE — CTA links to sironic.hu

## Architecture
- Frontend: Next.js 15 (App Router) + TypeScript strict + Tailwind v3, port 3000 via supervisor (`yarn start` → `next dev`)
- i18n: client-side context (`src/lib/i18n.tsx`), copy in `frontend/messages/hu.json` + `en.json`, toggle without reload, persisted in localStorage
- Fonts: next/font — Space Grotesk (display), Inter (body), JetBrains Mono
- Animations: Framer Motion (staggered hero card entrance, scroll reveals, MotionConfig reducedMotion="user")
- Forms: React Hook Form + Zod → POST `/api/contact`
- Backend: FastAPI (`backend/server.py`), MongoDB collection `contact_messages`, optional SMTP email (skipped while `SMTP_HOST` empty in `backend/.env`)
- `NEXT_PUBLIC_BACKEND_URL` mapped from `REACT_APP_BACKEND_URL` in `next.config.mjs`
- SEO: HU meta title/description, OG tags, Organization JSON-LD schema

## Implemented (2026-06-12) — MVP
- Sticky navbar: services dropdown (hover), anchor links, HU/EN toggle, quote CTA, mobile menu
- Hero: eyebrow, 3-line headline, CTAs, 4 brand-switcher cards with accent glows + staggered entrance (signature element)
- About section: display headline + body + 3 stats
- 3 sub-brand deep-dive alternating rows (accent eyebrow tag, bullets, external CTA)
- Why SIROTECH icon grid (6 items, Lucide icons)
- Pricing CTA banner (red accent → sironic.hu)
- References: 3 testimonial cards (placeholder content)
- Contact: split layout, validated form (company/name/email required, interest checkboxes, message), success/error states
- Footer: logo, sub-brand + nav links, legal line, LinkedIn
- Backend POST /api/contact with validation, Mongo persistence, env-gated SMTP
- Testing: iteration_1 — backend 7/7, frontend 17/17 PASS

## Pending From User
- Real logos → drop into `frontend/public/logos/` (sirotech.svg, sironic.svg, siroved.svg, sirosoft.svg)
- Real phone + tax number (messages/hu.json, en.json → contact.details.phone, footer.legal)
- SMTP credentials in `backend/.env` (SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, SMTP_FROM, CONTACT_INBOX) to enable email notifications
- Real client references / logos

## Backlog
- P1: Privacy Policy page (footer link is currently "#")
- P1: SMTP activation + send test once credentials provided
- P2: Map embed in contact section (spec mentioned optional map)
- P2: Client logo grid variant for references (grayscale, 60% opacity) when logos available
- P2: Static export / production build config for VPS + Cloudflare deployment

## Out of Scope (per spec)
Sub-brand full sites, CRM/portal integration, blog, client login, quote calculator.
