# Accredian Enterprise — Partial Clone

A Next.js recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built for the Accredian Full Stack Developer Intern assignment.

## Tech stack

- **Next.js 16** (App Router, functional components + hooks)
- **TypeScript**
- **Tailwind CSS v4** for styling
- **lucide-react** for iconography
- A mock **Next.js API route** (`/api/enquire`) for the lead capture form

## Getting started locally

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To create and run a production build:

```bash
npm run build
npm run start
```

## Deploying

The project is a standard Next.js App Router app, so it deploys to Vercel with no extra config:

1. Push this repo to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Keep the default build command (`next build`) and output — Vercel auto-detects Next.js.
4. Deploy.

## Approach

The reference site is a single, long landing page with an anchor-based nav (Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials), so the clone follows the same structure:

- `src/app/page.tsx` composes one section component per nav item, each with a matching `id` and `scroll-mt-*` for anchor scrolling.
- `src/data/content.ts` centralizes all copy/content as typed constants, keeping section components presentational and easy to re-theme or re-order.
- `src/components/Header.tsx` uses an `IntersectionObserver` to highlight the active nav link as you scroll, and includes a mobile menu.
- Sections that needed interactivity (FAQ accordion, lead form) are isolated as client components (`"use client"`); everything else stays a server component.
- Stock photography from the reference site was intentionally **not** reproduced. Instead, sections use icon-based illustrations, gradient panels and iconography (via `lucide-react` + a few custom inline SVGs) that carry the same visual role without copying imagery.
- **Bonus**: an "Enquire Now" flow (`src/components/EnquireForm.tsx`) posts to `src/app/api/enquire/route.ts`, a Next.js API route that validates the payload and logs the lead server-side (swap the `console.log` for a real DB/CRM/email integration in production — serverless platforms like Vercel don't have persistent disk storage).

## AI usage disclosure

Per the assignment's AI usage requirement, this project was built with Claude (Anthropic) as a pair-programming assistant, directly in this session:

**Where AI helped:**
- Reading the provided reference screenshots and translating that layout/content into a section-by-section information architecture (Header, Hero, Stats, Clients, Accredian Edge, CAT Framework, How It Works, FAQs, Testimonials, Footer).
- Scaffolding the Next.js + TypeScript + Tailwind project and generating the component code, data model (`content.ts`), and the mock lead-capture API route.
- Iterating on real build/lint errors (e.g. swapping out a Google Fonts dependency that isn't reachable in a network-restricted environment, and replacing `lucide-react` brand icons that were removed from the library with hand-written inline SVGs) until `npm run build` and `npm run lint` passed cleanly.

**What was reviewed/would be refined manually:**
- The "How It Works" and "How We Deliver Results" step copy is invented/paraphrased (the reference screenshots only partially captured those sections), and would be replaced with the real copy from the live site before shipping.
- Visual QA against the live reference site (pixel-level spacing, exact color values, exact imagery) — this build was verified via `next build`/`next lint` only, since the sandbox used to produce it has no browser available for visual screenshots. A manual pass in an actual browser against the reference site is the natural next step.
- Any real backend integration for the lead form (currently a mock/logging endpoint).

## Improvements with more time

- Wire the "Enquire Now" API route to a real destination (e.g. a database, Airtable, or an email service like Resend).
- Add unit/E2E tests (e.g. Playwright) covering the nav scroll-spy and the form's validation/success states.
- Pull exact copy and imagery treatment from the live site for the "How It Works" and "CAT Framework — How We Deliver Results" sections.
- Add page-level structured data (JSON-LD) and Open Graph images for SEO/sharing.
- Introduce a lightweight CMS (or MDX) for the content in `content.ts` so non-engineers can update copy.
