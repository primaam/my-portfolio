# AGENTS.md

Next.js 14 portfolio, deployed on Vercel. Single-package, no monorepo, no tests, no CI.

## Router: Pages Router, not App Router

- Entrypoints: `pages/index.tsx`, `pages/detail/[detail].tsx`, `pages/_app.tsx`, `pages/_document.tsx`.
- `src/app/` is empty — ignore it. Do not add `app/` routes.
- Shared layout: `src/components/Layout.tsx`; section components re-exported via `src/components/index.ts` — import from `@/components/`, not deep paths.
- Content (projects, experience) is hardcoded in `src/data/projectData.ts` and `src/data/experienceData.ts`. To add/edit a project, edit those files.

## Commands

- Install: `npm install`
- Dev: `npx next dev` (do NOT use `npm run dev` — it appends `&& google-chrome http://localhost:3000`, which fails without that binary).
- Verify: `npm run build` then `npm run lint`. No test or typecheck script exists; use `npx tsc --noEmit` for types.
- No env files, services, or migrations required.

## Gotchas

- Path alias is `@/*` → `./src/*` (`tsconfig.json`). `pages/detail/[detail].tsx` uses relative imports (`../../src/...`) while `_app.tsx` uses `@/` — keep each file's existing style.
- `tailwind.config.ts` `content` globs only cover `src/pages`, `src/components`, `src/app` — but real pages live in root `pages/`. Tailwind classes in `pages/*.tsx` may be purged. If styling in `pages/` doesn't apply, fix the globs rather than adding inline styles.
- Styling is CSS Modules (`src/styles/*.module.css`) + `globals.css` + Tailwind + MUI (`@mui/material`). Prefer the existing per-component CSS Module.
- `"use client"` directives are copy-paste leftovers from App Router; harmless under Pages Router, don't bulk-remove.
- `next.config.mjs` is empty; `postcss.config.mjs` loads only `tailwindcss` (no autoprefixer).
