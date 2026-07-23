# Accredian Enterprise — Partial Clone

A Next.js recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built for the Accredian Full Stack Developer Intern assignment.

**Live deployment:** https://accredian-psi-seven.vercel.app/

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

Deployed on Vercel with zero extra config — it's a standard Next.js App Router app, so Vercel auto-detects the framework, build command (`next build`), and output directory on import.

## Approach

The reference site is a single, long landing page with an anchor-based nav (Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials), so the clone follows the same structure:

- `src/app/page.tsx` composes one section component per nav item, each with a matching `id` and `scroll-mt-*` for anchor scrolling.
- `src/data/content.ts` centralizes all copy/content as typed constants, keeping section components presentational and easy to re-theme or re-order.
- `src/components/Header.tsx` uses an `IntersectionObserver` to highlight the active nav link as you scroll, and includes a mobile menu.
- Sections that needed interactivity (FAQ accordion, lead form) are isolated as client components (`"use client"`); everything else stays a server component.
- Stock photography from the reference site was intentionally **not** reproduced. Instead, sections use icon-based illustrations, gradient panels and iconography (via `lucide-react` + a few custom inline SVGs) that carry the same visual role without copying imagery.
- **Bonus**: an "Enquire Now" flow (`src/components/EnquireForm.tsx`) posts to `src/app/api/enquire/route.ts`, a Next.js API route that validates the payload and logs the lead server-side (swap the `console.log` for a real DB/CRM/email integration in production).

## AI usage disclosure

This project was built with Claude (Anthropic) as a pair-programming assistant, then reviewed, run, debugged, and shipped by me.

**Where AI helped:**
- Reading the reference screenshots and translating that layout/content into a section-by-section structure (Header, Hero, Stats, Clients, Accredian Edge, CAT Framework, How It Works, FAQs, Testimonials, Footer).
- Scaffolding the Next.js + TypeScript + Tailwind project and generating the initial component code, data model (`content.ts`), and the mock lead-capture API route.

**What I did myself:**
- Set up the local environment, ran `npm install` and `npm run dev`/`npm run build` on my own machine, and worked through the real errors that came up along the way (PowerShell not accepting `&&` as a command separator, a Turbopack "multiple lockfiles" warning caused by a stray `package-lock.json` outside the project).
- Reviewed the generated files, decided which auto-generated scaffolding (`AGENTS.md`, `CLAUDE.md`) wasn't needed and removed it before committing.
- Verified the site renders and functions correctly in the browser, initialized the git repo, committed, pushed to GitHub, and deployed it to Vercel at the link above.
- Reviewed this README and the AI-usage disclosure itself for accuracy before submitting.

**What's still worth refining:**
- The "How It Works" and "How We Deliver Results" step copy is invented/paraphrased, since the reference screenshots only partially captured those sections — this would be swapped for the real copy from the live site with more time.
- A closer visual pass against the live reference site (exact spacing, colors, imagery).
- Wiring the lead form to a real backend instead of the current mock/logging endpoint.

## Improvements with more time

- Wire the "Enquire Now" API route to a real destination (e.g. a database, Airtable, or an email service like Resend).
- Add unit/E2E tests (e.g. Playwright) covering the nav scroll-spy and the form's validation/success states.
- Pull exact copy and imagery treatment from the live site for the "How It Works" and "CAT Framework — How We Deliver Results" sections.
- Add page-level structured data (JSON-LD) and Open Graph images for SEO/sharing.
- Introduce a lightweight CMS (or MDX) for the content in `content.ts` so non-engineers can update copy.