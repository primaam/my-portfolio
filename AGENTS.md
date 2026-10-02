# AGENTS.md

Next.js 16 portfolio (App Router), deployed on Vercel. Single-package, no monorepo, no tests, no CI.

## Router: App Router

- Entrypoints: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/detail/[id]/page.tsx`.
- `pages/` was removed in revamp v2 — do not re-add Pages Router files.
- Home is a composition of section components (`Header`, `AboutMe`, `Background`, `Project`, `ContactMe`) re-exported via `src/components/index.ts` — import from `@/components/`.
- Content is hardcoded in `src/data/projectData.ts` and `src/data/experienceData.ts`. To add/edit a project, edit those files.
- **Next 15+ async `params`**: in `detail/[id]/page.tsx`, `params` is a `Promise` — must `await` it in both the page and `generateMetadata`. Accessing `params.id` synchronously throws at runtime (build may still pass).

## Commands

- Install: `npm install`
- Dev: `npm run dev` (plain `next dev`; the old `google-chrome` suffix is gone)
- Verify: `npm run build`, then `npm run lint`, then `npx tsc --noEmit`. No test script exists.
- No env files, services, or migrations required.

## Stack & styling

- Tailwind CSS v4 (CSS-based config in `src/styles/globals.css` via `@theme`; no `tailwind.config.ts`). PostCSS uses `@tailwindcss/postcss` — do not switch back to `tailwindcss` plugin.
- shadcn-style primitives in `src/components/ui/` (`button`, `badge`) + `cn()` in `src/lib/utils.ts`. Icon library is `lucide-react`. Subtle scroll reveals via `src/components/Reveal.tsx` (`framer-motion`).
- Dark minimalist theme tokens: `base`, `surface`, `elevated`, `accent`, `cream`, `muted` (defined in `@theme`).
- Fonts via `next/font/google` (Poppins) in `src/app/layout.tsx`.
- MUI, Emotion, Redux, `file-saver`, Ant Design icons were removed in v2. Resume download is a plain `<a href="/resume.pdf" download>`. Do not reintroduce them.
- Images use `next/image`; the one exception is `detail/[id]/page.tsx` logo `<img>` (kept plain to preserve legacy sizing, with an eslint-disable comment).
- `components.json` documents the shadcn setup (`cssVariables`, `iconLibrary: lucide`).
