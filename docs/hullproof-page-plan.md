# Hullproof page plan

Source: `venture-projects/security-lab/brand/RAREPHRONESIS-HULLPROOF-LANDING-BRIEF.md`. Branch: `dev`. Nothing goes to `main` without JT's command.

## Route

`/hullproof`, a normal App Router route in this site. It is not a subdomain. Planned URL: https://rarephronesis.com/hullproof

## Files

| Action | File | Why |
|---|---|---|
| Add | `app/hullproof/page.tsx` | Server Component with metadata, JSON-LD and all sections |
| Add | `lib/content/hullproof.ts` | All copy and links, because the repo rule is that copy lives in `lib/content/` |
| Add | `public/images/hullproof-pro.png` | Share card, copied from the brief's asset path |
| Add | `docs/hullproof-page-plan.md` | This file |
| No change | Nav, Footer, layout, sitemap | The site has no sitemap file. Nav link waits on JT (brief rule 10) |

## Reuse

Same navy and gold tokens, Plus Jakarta Sans and Inter, section rhythm and container width as `/services`. No new dependency. Native `details` for the FAQ, `lucide-react` (already installed) for the chevron.

## Decisions made while planning

1. No analytics. The brief says add tracking only if the site already runs the tool. PostHog is named in the privacy and cookie pages but is not installed.
2. The share image is used for Open Graph and Twitter only. It repeats the hero headline, so it is not shown on the page.
3. Title is shortened to 58 characters ("apps" in place of "software") because the brief asks for under 60 and its own title is 62. Needs JT's call.
4. The comparison renders as a real table from the `md` breakpoint up and as stacked rows below it, so a 360px phone has no horizontal scroll.

## Open questions for JT

1. Support email to show. Default is GitHub issues only.
2. Hullproof link in the site navigation. Not added.
3. Launch offer line (FIRST500, 15% off) is shown under the hero buttons and in the closing band, with no counter.

## Checks before reporting

Build and lint, dash search in the new files, link check, contrast, keyboard path, 360px and desktop screenshots.

## Decisions locked by JT (2026-10-08)

1. Support stays as GitHub issues only. hello@rarephronesis.com may be used later, not now.
2. No Hullproof link in the site navigation.
3. The FIRST500 line stays under the hero buttons and in the closing band.
