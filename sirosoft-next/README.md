# SIROTECH — Next.js 14 (App Router) build

Ez a projekt a SIROTECH umbrella oldal **saját hostingra készült**, önálló, teljes
értékű Next.js 14 (App Router) + TypeScript (strict) változata. A kódot közvetlenül
egy saját VPS-re (pl. Cloudflare mögé) tudod telepíteni — nem függ semmilyen
külső backendtől: az e-mail küldést és az opcionális MongoDB mentést a Next.js
saját API Route Handlerei intézik.

## Fő jellemzők

- **Next.js 14 App Router**, `src/app/` alatt, minden komponens TypeScriptben (strict)
- Tailwind CSS v3, `next/font` (Space Grotesk / Inter / JetBrains Mono)
- Framer Motion animációk, HU/EN nyelvváltás localStorage-ban megőrizve
- **Beépített backend**: `POST /api/contact` — Zod validáció + Nodemailer e-mail
  + opcionális MongoDB mentés. Ha az SMTP/Mongo nincs beállítva, a végpont
  továbbra is sikerrel válaszol (mocked mód).
- Nincs FastAPI / Python függőség.

## Rendszerkövetelmények

- Node.js 20 vagy újabb
- Yarn 1.22+
- (opcionális) MongoDB elérhető URL-en
- (opcionális) SMTP szerver (pl. saját MTA, Sendgrid, Resend, Postmark, Google Workspace)

## Telepítés

```bash
cd /app/sirosoft-next
yarn install
cp .env.local.example .env.local
# nyisd meg a .env.local-t és töltsd ki, amit szeretnél
```

## Fejlesztés

```bash
yarn dev
# http://localhost:3000
```

## Produkciós build és futtatás

```bash
yarn build
yarn start
# alapértelmezetten a 3000-es porton
# másik port: PORT=8080 yarn start
```

## API — `POST /api/contact`

**Request body (JSON):**

```json
{
  "company": "Példa Kft.",
  "name": "Kovács Anna",
  "email": "anna@pelda.hu",
  "interests": ["SIRONIC – IT üzemeltetés"],
  "message": "Egy rövid leírás..."
}
```

**Válaszok:**

| Eset | Status | Body |
|---|---|---|
| Sikeres beküldés (SMTP nincs beállítva) | 200 | `{ "success": true, "emailed": false, "id": "…", "stored": true \| false }` |
| Sikeres beküldés + e-mail is elment | 200 | `{ "success": true, "emailed": true, "id": "…", "stored": true \| false }` |
| Érvénytelen adat (pl. hibás e-mail) | 422 | `{ "success": false, "error": "validation_error", "details": {…} }` |
| Belső hiba | 500 | `{ "success": false, "error": "server_error" }` |

Példa cURL-hez (érvényes):

```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"company":"Teszt Kft","name":"Teszt Elek","email":"teszt@pelda.hu","interests":["SIRONIC – IT üzemeltetés"],"message":"Próba"}'
```

Példa érvénytelen adattal:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"company":"","name":"","email":"nem-email"}'
# → HTTP 422
```

## Környezeti változók

Lásd `.env.local.example`. Minden változó opcionális; hiányuk esetén az `/api/contact`
végpont mocked módban válaszol (siker, de e-mail nem megy, Mongo mentés kimarad).

## Deploy saját szerverre (Cloudflare + VPS példa)

1. `yarn build` a szerveren.
2. `pm2 start "yarn start" --name sirotech` (vagy systemd unit).
3. Cloudflare Tunnel / nginx reverse proxy a 3000-es portra.
4. Töltsd ki a `.env.local`-t éles SMTP + MongoDB URL-lel.

## Megjegyzés az Emergent preview-hoz

Ez a projekt kizárólag **saját hostingra** készült. Az Emergent preview környezet
nem tud külön Next.js szervert indítani ebből a mappából; a preview továbbra is
a `/app/frontend` alatti kódbázist szolgálja ki. A `/app/sirosoft-next/` build és
futtatás lokálisan és a saját szervereden ellenőrizhető.
