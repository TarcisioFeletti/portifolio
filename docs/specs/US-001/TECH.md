# TECH — Portfolio v4 "enxuta": sober, recruiter-focused layout

> US: US-001 · Area: single page (PT `/`, EN `/en/`) · Commit: 9f669ef (branch `feat/v4-enxuta`) · Status: Approved (2026-09-17)

## Context

The v3 "film reel" page (`src/app/pages/portfolio/portfolio.html`) stacks decorative pieces before any real content: `FilmOverlay` and `TopHud` (`features/site-chrome/`), `PortraitPlate` and `ReadoutStrip` (`features/hero/`), a marquee in `features/about/about.html:1-6`, and a `Projects` section on a paper background (`features/projects/`). Five accent colors are spread through the `Accent` type (`core/data/content.model.ts:3`), `AccentPipe` (`shared/ui/accent.pipe.ts`), `profile.ts` social accents, and per-index arrays (`JOB_ACCENTS`, `PROJECT_ACCENTS`, `CHIP_ACCENTS`, `CHIP_ROTATIONS`). This US replaces all of that with one left-aligned column (brittanychiang.com structure), one yellow accent, a small portrait, and client work folded into Experience. The architecture stays the same: typed content, `SeoService`, two prerendered routes, and the Pages workflow. No routes, SEO copy or dependencies change.

## Proposed Changes

### Content & models

**`core/data/content.model.ts`: final shape**

```diff
 export type Lang = 'pt' | 'en';
-export type Accent = 'yellow' | 'teal' | 'pink' | 'orange' | 'green' | 'paper';
-export interface LabelValue { label: string; value: string; }
-export interface Sticker { title: string; subtitle?: string; }
-export interface Stat { value: string; label: string; accent: Accent; }
+export interface Stat { value: string; label: string; }
-export interface SkillGroup { title: string; items: string; }
+export interface SkillGroup { title: string; items: string[]; }
+export interface ClientWork { name: string; sector: string; product: string; role: string; stack: string; }
 export interface Job {
   role: string; org: string; place: string; period: string; stack: string; summary: string;
-  highlights: string[];
+  clients: ClientWork[];
 }
-export interface Project { sector: string; name: string; body: string; stack: string; }
 export interface Education { course: string; school: string; period: string; }

 export interface SiteContent {
   lang, htmlLang, meta, skipLink, nav   // unchanged shape
-  hud: {...};
-  hero: { line1; line2; paragraphs: [string, string]; ctaMail };
+  hero: { role: string; valueProp: string; portraitAlt: string; ctaMail: string };
-  plate: {...};
-  strip: {...};
-  about: { reel; marquee; kicker; title; paragraphs; stats };
+  about: { kicker: string; title: string; paragraphs: string[]; stats: Stat[] };
-  stack: { reel; title; note; skills: string[]; groups };
+  stack: { title: string; note: string; groups: SkillGroup[] };
-  experience: { reel; title; jobs };
+  experience: { title: string; clientsLabel: string; jobs: Job[] };
-  projects: { reel; title; note; cta; takeLabel; items: Project[] };
+  openSource: { title: string; name: string; body: string; stack: string; cta: string };
   education: { ... };   // unchanged
-  contact: { reel; kicker; title; emailLabel; profilesLabel; locationLabel; location; footerRole };
+  contact: { kicker: string; title: string; emailLabel: string; profilesLabel: string; locationLabel: string; location: string; footerRole: string };
 }
```

- The name in the `<h1>` comes from `PROFILE.name` because it does not depend on language.
- `stack.skills` is removed because every entry already appears in `groups`. `groups[].items` becomes an array so it can render as straight tags without string splitting.
- `hero.paragraphs` is removed. Their content is covered by `about.paragraphs` and the new `valueProp`, and they would push the CTAs below the fold at 360×640 (AC-06). Owner decision: dropped entirely.

**`core/data/profile.ts`**

- `SocialLink` becomes `{ label; url }`. Drop the `Accent` import, `initials` (TF badge and monogram) and `githubLabel` (only used by Projects).
- Keep `name`, `email`, `github`, `socials` (LinkedIn, GitHub) and `year` (footer). Add `repo: 'https://github.com/TarcisioFeletti/portifolio'`.

**Migrating `content.pt.ts` / `content.en.ts`**

- `nav.sections`: remove `{ id: 'projetos', ... }`. The other four links stay: sobre, stack, experiencia, contato.
- Delete `hud`, `plate`, `strip`, `about.marquee`, `projects` and every `reel`. Remove `accent` from `about.stats`. Delete `stack.skills` and turn each `groups[].items` into an array (for example `['Java', 'Spring Framework', ...]`).
- `hero`: `role` is `'Desenvolvedor Full Stack'` / `'Full Stack Developer'` (the text of the old `contact.footerRole`). `portraitAlt` moves from `plate.portraitAlt`, but drops "preto e branco"/"black and white" because the new portrait is in color: PT `'Retrato de Tarcisio Feletti'`, EN `'Portrait of Tarcisio Feletti'`. `ctaMail` stays.
- `hero.valueProp`. **Validated by the owner:**
  - PT: `'Mais de 4 anos construindo sistemas web com Java/Spring e Angular. Disponível para remoto e presencial na Grande Vitória.'` (validated)
  - EN: `'4+ years building web systems with Java/Spring and Angular. Available for remote work and on-site in Greater Vitória.'` (validated)
- `experience.clientsLabel`: `'Clientes'` / `'Clients'` (the `aria-label` of the client list).
- `experience.jobs[].clients`: this replaces `highlights`. Each field is taken from the old `projects.items[]` (sector, product = body, stack) or the old `highlights[]` (role = the text after the client name, with the parts that repeat the product removed). No new claims are added. The intern job gets `clients: []`.

| Job     | name           | sector (PT / EN)                    | product = old `projects.body` | role = old `highlights[]`, trimmed                                                                                                                                                                                                                                                                                                                         | stack                           |
| ------- | -------------- | ----------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Optsolv | ArcelorMittal  | Indústria / Steel industry          | unchanged                     | PT: `Migração do sistema legado para uma aplicação web moderna em Angular, usando desenvolvimento assistido por IA para acelerar a modernização mantendo a qualidade do código.` EN: `Migrated the legacy system to a modern Angular web application, using AI-assisted development to speed up modernisation while keeping code quality.`                            | `Angular · TypeScript · Spring` |
| Optsolv | WeDo / Comunify | RH & engajamento / HR & engagement | unchanged                     | PT: `Responsável principal pelo front-end em Angular, respondendo por praticamente todas as decisões técnicas do front. No back-end em Java e Spring Boot, construí APIs REST com TDD e testes automatizados.` EN: `Lead front-end developer (Angular), answering for nearly all front-end technical decisions. On the Java and Spring Boot back end, built REST APIs with TDD and automated tests.` | `Angular · Spring Boot · TDD`   |
| Itix FS | Unimed Goiânia | Saúde / Healthcare                  | unchanged                     | PT: `Desenvolvimento completo do sistema em Angular e Spring. Em uma fase do projeto atuei como único desenvolvedor, assumindo as decisões técnicas e a responsabilidade pelas publicações.` EN: `Built the system end to end in Angular and Spring. At one project stage I was the only developer, owning the technical decisions and the releases.`                     | `Angular · Spring · SQL`        |
| Itix FS | Risch Law Firm | Jurídico / Legal                    | unchanged                     | PT: `Desenvolvimento, como dev Angular + Spring, de todo o sistema.` EN: `As the Angular + Spring developer, built the firm's entire system.`                                                                                                                                                                                                                       | `Angular · Spring · SQL`        |

- `projects.note` ("Code and screens are not public") is dropped: RN-05 already keeps clients without links or screenshots. `projects.cta` is replaced by the GitHub CTAs in the hero and footer.
- `openSource`. **Approved:**
  - PT: `{ title: 'Projeto público', name: 'Este portfólio', body: 'Site bilíngue estático em Angular 22, pré-renderizado e publicado no GitHub Pages via GitHub Actions.', stack: 'Angular 22 · SSG · GitHub Pages', cta: 'Ver o código no GitHub' }`
  - EN: `{ title: 'Public project', name: 'This portfolio', body: 'Bilingual static site in Angular 22, prerendered and deployed to GitHub Pages with GitHub Actions.', stack: 'Angular 22 · SSG · GitHub Pages', cta: 'View the code on GitHub' }`
- `meta` stays unchanged. It mentions "Projetos para saúde..." but not the Projects section.

### UI

- **Delete**
  - `features/site-chrome/film-overlay.ts` and `top-hud.ts`
  - `features/hero/portrait-plate.{ts,html,scss}` and `readout-strip.{ts,html,scss}`
  - all of `features/projects/`
  - `shared/ui/accent.pipe.ts` and `shared/ui/section-header/`
  - the marquee markup and styles (`about.scss` `.marquee*` and `@keyframes marquee`), `.dot` and `.kicker` pink
  - `CHIP_ACCENTS` and `CHIP_ROTATIONS` in `stack.ts`, `JOB_ACCENTS` and `numberFor` in `experience.ts`
- **Create**
  - `features/open-source/{open-source.ts,open-source.html,open-source.scss,index.ts}`: `OpenSource`, selector `app-open-source`. It has a new feature folder because features must not import each other, and this block is neither Experience nor Education.
  - Component specs (see Testing).
- **Modify**: `pages/portfolio/portfolio.{html,ts}`, `features/site-chrome/{index.ts,site-nav.*}`, `features/hero/{index.ts,hero.*}`, `features/about/*`, `features/stack/*`, `features/experience/*`, `features/education/*`, `features/contact/*`, `pages/not-found/not-found.ts` (drop `.hud`, use `.eyebrow`), `app.spec.ts`.
- **Components**
  - `SiteNav`: inputs `nav`, `lang`. Sticky. The brand shows the text "Tarcisio Feletti" with no badge. Section links use `routerLink` + `fragment`. The PT/EN switch stays.
  - `Hero`: input `hero` (the `hud` input is removed). Imports `NgOptimizedImage`. Renders `<header id="top">` with the portrait, `<h1>{{ profile.name }}</h1>`, `<p class="role">`, `<p class="value-prop">` and CTAs in this order: LinkedIn (`.cta-primary`), e-mail (`mailto:`), GitHub (`target="_blank" rel="noopener noreferrer"`). The CTAs iterate `profile.socials`.
  - `About`: input `about`. Shows an eyebrow (kicker), an h2 (title), 2 paragraphs, and a `<dl>` of 3 stats in neutral `--color-paper`.
  - `Stack`: input `stack`. Shows an h2 and a note, then each group as an `h3` plus a `<ul>` of straight tags (mono, `--color-line` border, `--color-text-soft` text, no transform).
  - `Experience`: input `experience`. An `<ol>` of jobs. Each job has an `h3` role, the org and place, the period (mono, yellow), a stack line (mono), the summary, and `@if (job.clients.length)` a `<ul [attr.aria-label]="experience().clientsLabel">` of clients. Each client has an `h4` name, a sector eyebrow, product, role and stack. There are no links (RN-05).
  - `OpenSource`: input `openSource`. `<section id="codigo">` with an h2, name, body, stack and a link to `profile.repo` (`target="_blank" rel="noopener noreferrer"`).
  - `Education`: input `education`. The UFES item (`items[0]`) is the larger `h3`, the technical course is a smaller line, the certs are one `<p>` joined by ` · ` (an `@for` with a separator, no `li.cert` pills), and the research is `small`.
  - `Contact`: input `contact`. `<footer id="contato">` shows the e-mail, LinkedIn and GitHub from `profile.socials` (neutral underline, yellow on hover and focus), the location and the copyright. There is no `tel:` and no CV link.
- **Shared UI**: `shared/ui/` ends up empty and is removed. Section headings use global utilities, so there is no new shared component.
- **Styling/tokens** (`src/styles/tokens.css`, `src/styles.scss`)
  - Remove `--color-teal`, `--color-pink`, `--color-orange`, `--color-green`, `--color-hud-dim`, `--color-paper-muted`, `--color-plate-hud`, `--color-grid-ink`, `--color-grid-ink-soft`, `--grid-size`, `--gradient-chrome-plate`, `--gradient-chrome-text` and `--shadow-sticker`. Also remove `--color-text-nav`, `--color-ink-raised` and `--color-line-faint` if the restyle leaves them unused. Check with grep in step 7.
  - Keep `--color-ink`, `--color-paper`, `--color-yellow` (the only accent), `--color-text-strong/soft/dim`, `--color-muted`, `--color-line`, `--color-line-strong` and the three font tokens.
  - New tokens:
    - `--content-width: 44rem` (reading column)
    - `--portrait-size: clamp(120px, 36vw, 144px)`
    - `--color-ink-glass: rgb(12 12 12 / 92%)`. This replaces the hardcoded value in `site-nav.scss:15`, which violates invariant 4.
  - Changed tokens:
    - `--title-size: clamp(24px, 3.2vw, 36px)` (contained Anton, AC-04)
    - `--nav-height`: the mobile value goes from `120px` to about `96px`. The nav is two rows: brand + switch, then four links. Measure the real height.
  - `styles.scss`:
    - Delete `.hud`, `.ticks` and `.corners`.
    - Add `.eyebrow` (mono, 12px, uppercase, `--color-muted`, which must meet AA; see Risks).
    - `.section-title` gets `line-height: 1.05` and no longer uses the Anton-only shout sizes.
    - `::selection` switches to a `--color-yellow` background with `--color-ink` text.
    - Add a `.page` column wrapper (`max-width: var(--content-width); margin-inline: auto; padding-inline: var(--gutter)`), applied in `portfolio.html`.
  - Anton is only used in `.hero h1` and `.section-title`. Remove the `font-display` uses in `contact.scss`, `experience.scss` and `about.scss` (stat values move to Archivo 800).
- **Routing/SEO**: no changes. `SeoService` and `meta` are untouched. Anchor ids stay `top`, `sobre`, `stack`, `experiencia`, `formacao` and `contato`. `codigo` is new but not in the nav.
- **Behavior**
  - No signals beyond `computed(() => CONTENT[lang])`. `Stack.chips` computed is removed.
  - No animations are left. Transitions are limited to `color`/`border-color` on hover and focus. The existing reduced-motion block in `styles.scss:121-132` stays. There is no `afterNextRender` or browser API.
  - The portrait markup, inside a `.portrait` wrapper sized with `--portrait-size`, `border-radius: 50%`, `overflow: hidden`, a `--color-line-strong` border and `position: relative`:
    ```html
    <img ngSrc="assets/portrait.webp" fill priority sizes="144px" [alt]="hero().portraitAlt" />
    ```
    Style it with `object-fit: cover; object-position: 35% 6%`. `fill` avoids the NgOptimizedImage aspect-ratio warning (the source is 542×991). The asset path stays relative (invariant 6).

**`pages/portfolio/portfolio.html` (final)**: skip link, `<app-site-nav>`, `<main #main id="main" class="page">` with hero, about, stack, experience, open-source and education, then `<app-contact class="page">`.

### Build & deploy

- Prerender routes, `scripts/postbuild.mjs` (404, sitemap, robots) and `.github/workflows/deploy.yml` stay unchanged. No new dependency.
- The bundle should shrink (about 750 lines of SCSS removed). `anyComponentStyle` budgets (6kB/8kB) are not at risk.
- The Google Fonts URL in `src/index.html` can drop the Archivo weights that are no longer used (keep 400/600/800). This is optional and low risk.

## Design fidelity

There is no v4 artboard. The reference is the US plus brittanychiang.com (one column, wide spacing, dated experience with tags). This is an intended deviation from `design/portfolio-v3.dc.html`: only the color tokens (ink, neutrals, yellow) and the Anton/Archivo/JetBrains Mono type are kept. Breakpoints: fluid from 320px, one column up to `--content-width`, no multi-column grids (the `auto-fit` grids in about, experience, education and contact become a single flow; stats may stay as a 3-up row ≥480px). Above the fold at 360×640 there must be a nav of about 96px, then portrait (144), name, role, value prop and CTAs. Target a total of 600px or less.

## Implementation order (each commit green on `npm run lint`, `npm run test:ci`, `npm run build`)

The suggested "model+content first" order is changed because a model-only commit cannot compile: templates still read `hud`/`plate`/`strip`. Keys are removed in the same commit as the components that read them.

1. **Remove decoration**
   - Delete `FilmOverlay`, `TopHud`, `PortraitPlate`, `ReadoutStrip`, the marquee and `SectionHeader`.
   - Remove the `hud`, `plate`, `strip`, `about.marquee` and all `reel` keys from the model and both content files. Remove the `hud` input and `.tags` from `Hero`.
   - Update the `portfolio.ts` imports and `hero/index.ts`/`site-chrome/index.ts`.
2. **Single accent**
   - Delete `Accent`, `AccentPipe`, `Stat.accent`, `SocialLink.accent` and the accent/rotation arrays. Move every remaining color use to `--color-yellow` or neutrals.
   - Update the tokens (remove and add, including `--color-ink-glass`), `::selection`, and remove `.hud`/`.ticks`/`.corners` (fix `not-found.ts` and the `.corners` use in projects).
3. **New hero + nav**
   - Hero model (`role`, `valueProp`, `portraitAlt`), the portrait with NgOptimizedImage, the three CTAs.
   - Nav brand text, remove `initials`, adjust `--nav-height`. Update `app.spec.ts`: h1 contains "Tarcisio Feletti", `.role` contains "Desenvolvedor"/"Developer".
   - Add `hero.spec.ts` and `site-nav.spec.ts`.
4. **Experience + public project**
   - `Job.clients` and `experience.clientsLabel` using the table above.
   - Create `features/open-source/` and add `openSource` content and `profile.repo`.
   - Delete `features/projects/`, the `projects` key, the `projetos` nav entry and `githubLabel`.
   - Add `experience.spec.ts` and `open-source.spec.ts`.
5. **About + Stack**: neutral stats, `stack.skills` removed, `groups[].items: string[]`, straight tags, `.page` column and `.section-title`/`.eyebrow`. Add `about.spec.ts` and `stack.spec.ts`.
6. **Education + Contact**: UFES as the main item, certs as one text line, small research, footer channels. Add `education.spec.ts` and `contact.spec.ts`.
7. **Specs, a11y and responsive pass**
   - Fill spec gaps and add the RN-04 ordering test.
   - Grep for dead tokens and hardcoded colors.
   - Check keyboard order, contrast, 320px/360×640/desktop, reduced motion, and the base-href build.
   - Trim the font weights.

## Testing

Component specs follow one pattern: `it.each(['pt', 'en'] as const)`, `TestBed.createComponent`, `fixture.componentRef.setInput('<input>', CONTENT[lang].<key>)`, then `await fixture.whenStable()`. `SiteNav` also needs `provideRouter([])`.

- [ ] Unit, `content.spec.ts` (existing): PT/EN shape parity and no empty strings still pass on the reduced model (AC-14). Add:
  - jobs sorted by start date, newest first (RN-04), and every period matches `/^\d{2}\/\d{4} — \d{2}\/\d{4}$/`
  - the Optsolv clients are exactly `['ArcelorMittal', 'WeDo / Comunify']` and the Itix FS clients are `['Unimed Goiânia', 'Risch Law Firm']` (AC-10)
- [ ] Component, `site-nav.spec.ts`: brand text is "Tarcisio Feletti" and there is no `.brand-badge`. It renders 4 section links, none with the `projetos` fragment. Hrefs end in `#sobre` etc. The switch label is EN or PT (AC-05).
- [ ] Component, `hero.spec.ts`:
  - `h1` = profile name; the role and value prop render
  - `img[alt]` = `portraitAlt`
  - the CTAs include `mailto:tarcisio.feletti@gmail.com`, the LinkedIn URL and the GitHub URL
  - exactly one `.cta-primary` (AC-06, AC-07)
- [ ] Component, `about.spec.ts`: 2 paragraphs and 3 `dt/dd` stats, no `.marquee`, no inline `style` color on stats (AC-08).
- [ ] Component, `stack.spec.ts`: tag count equals the sum of `groups[].items`, no element with an inline `transform` (AC-09).
- [ ] Component, `experience.spec.ts`: 3 jobs in content order, 2+2+0 client items, each client shows name, product, role and stack, no `a` inside the client list (AC-10, RN-05).
- [ ] Component, `open-source.spec.ts`: the link `href` is `https://github.com/TarcisioFeletti/portifolio` and the stack text renders (AC-11).
- [ ] Component, `education.spec.ts`: the first course is in the `h3`, certs are a single `p` containing both certs, no `.cert` list items, the research body renders (AC-12).
- [ ] Component, `contact.spec.ts`: `mailto:`, LinkedIn and GitHub links, location text, no `a[href^="tel:"]`, no CV link (AC-13).
- [ ] Routes, `app.spec.ts`: updated h1/role assertions for `/` and `/en`, not-found unchanged.
- [ ] Build / verification commands:
  ```sh
  npx prettier --check .
  npm run lint
  npm run test:ci
  npm run build
  MSYS_NO_PATHCONV=1 SITE_URL=https://tarcisiofeletti.github.io/portifolio npm run build -- --base-href /portifolio/
  grep -o 'href="[^"]*#[a-z]*"' dist/portifolio/browser/index.html dist/portifolio/browser/en/index.html   # expect /portifolio/#sobre, /portifolio/en/#sobre ...
  grep -rnE "teal|pink|orange|green|accent|@keyframes|animation:|rotate\(" src      # expect no matches
  grep -rnE "#[0-9a-fA-F]{3,8}\b|rgb\(" src/app                                      # expect no matches (colors only in tokens.css)
  ```
- [ ] Manual, with `npx http-server dist/portifolio/browser` or the base-href build served under `/portifolio/`:
  - AC-01/02: no overlay, HUD, plate, strip, marquee or Projects; section order as specified
  - AC-03/04: only yellow on links, the primary CTA, dates and focus; Anton only on the name and h2
  - AC-05: sticky nav, links work on PT and EN under `/portifolio/`
  - AC-06: 360×640 and 320px in DevTools, portrait through CTAs visible without scrolling
  - AC-15: Tab order follows the visual order with visible focus; axe/Lighthouse shows no contrast failures; no horizontal scroll from 320px to 1440px
  - AC-16: with reduced motion emulated and not emulated, nothing moves except hover/focus color transitions

## Risks

- **Portrait.** Decided: circular, using a new color, head-and-shoulders square crop of the original photo (720×1280, plain gray wall background) instead of the current B&W cutout with the white fade. Tarcisio saves the original to `design/portrait-original.jpg` (gitignored folder). Step 3 crops it to a face-centered square (about x 230–570, y 100–440 of the original) and exports `public/assets/portrait.webp` at 320×320 (2× the 144px display). Only the asset changes; the markup stays the same. The green shirt is photo content, not a UI accent, so it does not break AC-03.
- **Above the fold at 360×640.** The mobile nav wraps to two rows, so name + value prop + 3 CTAs must fit in about 544px. CTAs should sit on one row (LinkedIn as a button plus two short text links). The validated valueProp is longer, so check it wraps to no more than 3 lines at 360px. If they overflow, shorten `valueProp` rather than hiding content.
- **Contrast.** `--color-muted` (#8a8580) on `--color-ink` is about 5.4:1, which passes AA for normal text. Keep eyebrows at 12px or larger. Yellow focus outlines on ink pass. The yellow-filled primary CTA needs `--color-ink` text.
- **Hydration.** Removing components changes the DOM in both prerendered pages. Run the full build rather than `ng serve` only, so hydration mismatches (NG0500) show up in the console.
- **Content loss.** `hero.paragraphs`, `stack.skills`, `projects.note`, `projects.cta` and the `strip`/`plate` phrases are removed. Only `hero.paragraphs` holds unique phrasing ("Gosto de assumir o problema inteiro..."). Everything else is duplicated elsewhere.

## Decisions (resolved open questions, 2026-09-17)

1. `hero.valueProp` was validated with the on-site wording above. The `openSource` wording is approved.
2. `hero.paragraphs` is dropped entirely.
3. The primary CTA is LinkedIn.
4. The nav does not link to Formação.
5. The portrait is circular, a color square crop of the original photo (see Risks → Portrait).
