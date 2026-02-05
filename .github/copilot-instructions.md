# Copilot instructions — weather-app

Purpose

- Short, actionable guidance for AI contributors working in this repository.

Agent directive (from AGENT.instructions.md)

- Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

Quick start (commands)

- Development: `npm run dev` (Next.js dev server)
- Build: `npm run build`
- Start production: `npm run start`
- Lint: `npm run lint` (uses `eslint` / `eslint-config-next`)

Project overview

- This is a Next.js app using the App Router (app/ directory). UI files live under [app](app). The project uses TypeScript, Tailwind CSS, and Prettier with `prettier-plugin-tailwindcss`.
- Key versions are in [package.json](package.json) — Next 16, React 19, Tailwind v4.

Key files and places to edit

- Root app entry and layout: [app/layout.tsx](app/layout.tsx) — global fonts and metadata live here.
- Main page: [app/page.tsx](app/page.tsx) — starting point for UI changes.
- Global CSS: [app/globals.css](app/globals.css).
- Shared types: [app/types/index.ts](app/types/index.ts).
- Config: [next.config.ts](next.config.ts) and [tsconfig.json](tsconfig.json).

Conventions & patterns (project-specific)

- App Router conventions: add new routes under `app/<route>/page.tsx` and use `layout.tsx` for shared layout and metadata.
- Server vs Client components: files in `app/` default to server components. Add `"use client"` at the top of a file to make it a client component when using state, effects, or browser-only APIs.
- Font setup: fonts are configured in `app/layout.tsx` via `next/font/google` and exposed as CSS variables (see `--font-geist-sans` and `--font-geist-mono`). Keep layout-level font variables intact when refactoring.
- Static assets: store in `public/` (examples: `/next.svg`, `/vercel.svg`) and reference them via absolute paths like `/next.svg`.
- TypeScript path alias: `@/*` maps to the repo root (see `tsconfig.json`) — prefer this alias for internal imports when appropriate.
- Formatting ordering: Prettier + `prettier-plugin-tailwindcss` is used; run `npx prettier --write .` before commits to ensure Tailwind class order.

Integration points & deployment

- No backend/API routes exist in the repo. Deployment is straightforward to Vercel (see README). Keep Next version compatibility in mind when changing framework features.

Testing & CI

- There are no tests in the repo. Linting is available via `npm run lint`.

Notes for AI agents

- Be conservative with package upgrades — this project pins major Next and Tailwind versions. If suggesting dependency changes, call them out explicitly.
- Prefer minimal, focused edits. Example edits: change copy in [app/page.tsx](app/page.tsx), update layout metadata in [app/layout.tsx](app/layout.tsx), or add small components under `app/components/`.
- When adding interactive UI, mark the file with `"use client"` and keep server-only data fetching in server components.

If anything above is unclear or you want the conventions expanded (routing, component patterns, or CI hooks), tell me which area to expand.
