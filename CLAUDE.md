# Rare Phronesis Website

Multi-page Next.js marketing site for rarephronesis.com.

## Stack
- Next.js App Router · TypeScript · Tailwind CSS v4
- Resend for email (contact forms + newsletter)
- Lucide React for icons
- Deployed on Vercel

## Routes
| Route | Nav? | Notes |
|---|---|---|
| `/` | Yes | Long-form homepage |
| `/services` | Yes | Full tier + add-on detail |
| `/portfolio` | Yes | All 12 case studies |
| `/work-with-us` | Footer only | 3-tab contact form, deep-linkable |
| `/privacy` | Footer only | |
| `/terms` | Footer only | |
| `/acceptable-use` | Footer only | |
| `/cookie-policy` | Footer only | |

## Content files
All copy lives in `lib/content/` — edit there, not inline in pages:
- `lib/content/services.ts` — 3 tiers + 3 add-ons
- `lib/content/case-studies.ts` — 12 projects (add `url` fields as Joshua provides them)
- `lib/content/faq.ts` — FAQ entries

## Design tokens
Dark navy + gold. All defined as CSS custom properties in `app/globals.css`.
- Background: `hsl(210 65% 10%)`
- Primary/accent: `hsl(45 100% 44%)` (gold)
- Fonts: Plus Jakarta Sans (display) · Inter (body) — loaded from Google Fonts

## Forms
- `/app/api/contact/route.ts` — handles all 3 form types via Resend
- `/app/api/newsletter/route.ts` — newsletter signup → Resend audience
- Env vars required: see `.env.local.example`

## Open items (Joshua to provide)
- [ ] Portfolio project URLs (`url` field in `lib/content/case-studies.ts`)
- [ ] `CONTACT_EMAIL_INQUIRY` env var
- [ ] `CONTACT_EMAIL_SERVICE` env var
- [ ] `RESEND_API_KEY` + `RESEND_FROM_EMAIL` + `RESEND_AUDIENCE_ID`
- [ ] Social media handle URLs in `components/layout/Footer.tsx`
- [ ] Governing jurisdiction in `app/terms/page.tsx` (marked PLACEHOLDER)
- [ ] Analytics provider in `app/privacy/page.tsx` and `app/cookie-policy/page.tsx` (marked PLACEHOLDER)

## Service taxonomy — do not change without flagging
Exactly 3 tiers: Advisory · SaaS · Websites. Add-ons are not tiers.
