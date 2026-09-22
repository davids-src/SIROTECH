# CHANGELOG: SIROTECH Website Expansion & Refactoring

## Architecture & Routing
- Restructured the single-page application into a multi-page App Router architecture.
- Created static index pages for: `/megoldasok`, `/szolgaltatasok`, `/meglevo-rendszerek`, `/teruletek`, `/rolunk`, `/kapcsolat`, `/partneri-egyuttmukodes`.
- Created dynamic SSG routes for nested content:
  - `/megoldasok/[slug]` (9 use-cases)
  - `/szolgaltatasok/[slug]` (4 divisions)
  - `/meglevo-rendszerek/[slug]` (4 system states)
  - `/teruletek/[slug]` (4 locations)
- Updated `Navbar.tsx` with a responsive Mega-Menu for Desktop and Accordion for Mobile.

## UI & Design
- Integrated a new interactive SVG map in `Hero.tsx` with 4 divisional nodes and pulsing animations.
- Built new Home sections: `IntentSection` (4 cards), `SolutionPreview` (3x3 grid), `Lifecycle` (timeline/circular flowchart), and `ExistingSystemCta`.
- Maintained the strict dark-mode design system and Tailwind config.
- Implemented `prefers-reduced-motion` fallbacks.

## Contact Form & API
- Completely removed MongoDB dependency from `src/app/api/contact/route.ts`.
- Implemented a 10-field Zod validation schema + hidden attribution fields.
- Re-built `ContactForm.tsx` using `react-hook-form`.
- Customized Admin and Client HTML email templates to include the new fields securely.

## Analytics & SEO
- Authored a dynamic `src/app/sitemap.ts` that includes all new routes.
- Built `src/lib/attribution.ts` using `localStorage` to capture `first_touch` and `last_touch` parameters without sending PII.
- Rewrote `src/lib/gtag.ts` for strict typing of custom GA4 events (`generate_lead`, `customer_type_select`, `request_type_select`, etc.).
- Integrated the `captureAttribution` logic into the root `GoogleAnalytics` tracker component.
- Implemented robust `Metadata` generation in all `page.tsx` files.
