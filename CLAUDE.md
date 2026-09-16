# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Tarcisio Feletti's personal portfolio: a one-page, bilingual (PT at `/`, EN at `/en/`) site. Visual source of truth: the Claude Design project "Portfolio Tarcisio v3" — a dark, cinematic "film reel" look (Anton / Archivo / JetBrains Mono). A copy of the design HTML, including the full PT/EN copy, is in `design/portfolio-v3.dc.html`. Content comes from Tarcisio's CV.

## Current state

The design is fully implemented in Angular 22. Sections: top HUD, sticky nav, hero, portrait plate with stickers, readout strip, about (marquee and stats), stack, experience, projects, education, contact/footer. There is also a CSR not-found page. The GitHub Pages workflow is in place.

Commands: `npm start`, `npm run lint`, `npm run test:ci` (Vitest), `npm run build` (prerender + `scripts/postbuild.mjs`). Requires Node 24 (`.nvmrc`). On Windows Git Bash, prefix commands that pass `/portifolio/` with `MSYS_NO_PATHCONV=1`. For a local Pages-like build: `SITE_URL=https://tarcisiofeletti.github.io/portifolio npm run build -- --base-href /portifolio/`.

## Stack (decided)

- **Angular 22** (zoneless), standalone components, signals, built-in control flow, `strict` + `strictTemplates`.
- **Static prerender (SSG)** via `@angular/ssr` with `outputMode: "static"`. No runtime server, no backend, no database.
  - New routes go in `app.routes.ts` and as `RenderMode.Prerender` in `app.routes.server.ts`.
  - The `**` catch-all stays `RenderMode.Client`; its `index.csr.html` becomes `404.html`.
- **i18n without a framework:**
  - Both languages share one `Portfolio` page. The route `data.lang` is bound to its `lang` input.
  - Copy lives in `core/data/content.pt.ts` and `content.en.ts`, typed by `content.model.ts`. A spec enforces that both have identical shape.
  - Language-independent facts (email, phone, links, CV path) live in `core/data/profile.ts`.
- **Hosting:** GitHub Pages, deployed by GitHub Actions on push to `main`. PRs run format check, lint, test and build only.
- **Styling:** SCSS + CSS custom-property tokens in `src/styles/tokens.css`. Global utilities in `src/styles.scss`: `.hud`, `.ticks`, `.corners` (gradient corner marks), `.section-title`. The design is dark-only by intent, so there is no theme toggle.
- **Assets:** `public/assets/portrait.webp` is derived from `design/portrait-body.png` (grayscale, WebP). `public/assets/tarcisio-feletti-cv.pdf` is the downloadable CV.
- **Lint/format:** angular-eslint (with template a11y rules) + Prettier. **Tests:** Vitest via `ng test`. **Package manager:** npm.

## Layout

```
src/app/
  core/          data/ (typed content + profile), seo/ (title, meta, canonical, hreflang)
  shared/ui/     section-header, accent pipe (maps an Accent name to its color token)
  features/      site-chrome (film overlay, top HUD, nav), hero (hero, portrait-plate, readout-strip),
                 about, stack, experience, projects, education, contact; index.ts is each feature's public surface
  pages/         portfolio (both languages), not-found
src/styles/tokens.css
public/          static files copied as-is (assets/, favicon)
design/          design reference (not built)
.github/workflows/
```

## Invariants

1. Static-only output; every real route is prerendered.
2. Features never import other features; `shared/` and `core/` never import `features/` or `pages/`.
3. SSR-safe: browser globals only inside `afterNextRender` or platform guards.
4. Design tokens only; no hardcoded colors in components. Per-item accents use the `Accent` type and the `accent` pipe.
5. Content lives in `core/data`, not in templates. Any new copy must be added to both PT and EN.
6. Base-href-safe URLs (the site is served at `/<repo>/`). The base href is set in CI and never hardcoded.
   - In-page anchors use `routerLink` + `fragment`, not `href="#..."`.
   - Assets use relative paths.
7. No secrets in the bundle (`environment.ts` is public).
8. WCAG AA, responsive from 320px, `prefers-reduced-motion` stops every animation (film grain, scanlines, marquee, sticker spin).
9. Almost no comments; only a non-obvious _why_.

## Agents & workflow (`.claude/agents/`)

Idea → `product-owner` (US in `docs/user-stories/`) → `tech-spec-writer` (`docs/specs/US-NNN/TECH.md`, human marks Approved) → `feature-builder` (delegates to `angular-specialist` / `deploy-specialist`, then `council-judge` review) → `qa-test-designer` (`docs/qa/US-NNN/`). For small changes, call `angular-specialist` or `deploy-specialist` directly. For decisions, use `council-judge`.

`.agents/` (gitignored) holds the original agents from the Optsolv PMS project (React/Fastify) that these were adapted from. It is reference only; don't apply its rules here. Generic skills were copied to `.claude/skills/`.
