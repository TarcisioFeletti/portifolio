# Portfólio — Tarcisio Feletti

Site pessoal bilíngue (PT em `/`, EN em `/en/`) em Angular 22, gerado como HTML estático (prerender) e publicado no GitHub Pages via GitHub Actions. Visual baseado no design "Portfolio Tarcisio v3" do Claude Design (`design/`).

**Produção:** https://tarcisiofeletti.github.io/portifolio/

## Requisitos

- Node 24 (`.nvmrc`) — com nvm-windows: `nvm install 24 && nvm use 24`

## Comandos

| Comando                        | O que faz                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| `npm start`                    | Servidor de desenvolvimento em http://localhost:4200/                                |
| `npm run lint`                 | ESLint (angular-eslint, regras de template e acessibilidade)                         |
| `npm test` / `npm run test:ci` | Testes unitários (Vitest) em watch / execução única                                  |
| `npm run build`                | Build de produção com prerender + `postbuild` (404.html, .nojekyll, robots, sitemap) |
| `npm run format`               | Prettier                                                                             |

Para simular o build publicado localmente (Git Bash precisa de `MSYS_NO_PATHCONV=1`):

```bash
SITE_URL=https://tarcisiofeletti.github.io/portifolio npm run build -- --base-href /portifolio/
```

## Deploy

O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) roda lint, testes e build em todo PR e push; em push na `main` publica `dist/portifolio/browser` no GitHub Pages. O `base-href` e a URL do sitemap são derivados do nome do repositório.

**Configuração única:** no GitHub, _Settings → Pages → Build and deployment → Source: GitHub Actions_.

Domínio próprio: crie `public/CNAME` com o domínio e troque o `--base-href` do workflow para `/` e `SITE_URL` para o domínio.

## Estrutura

```
src/app/
  core/       conteúdo tipado PT/EN (data/), dados de contato, SEO
  shared/ui/  componentes de apresentação reutilizáveis
  features/   uma pasta por seção do portfólio (não importam umas às outras)
  pages/      rotas que compõem as features
src/styles/tokens.css   design tokens (cores, tipografia, espaçamento)
scripts/postbuild.mjs   ajustes do artefato para o GitHub Pages
```

Textos ficam em `src/app/core/data/content.pt.ts` e `content.en.ts` (mesma estrutura, garantida por teste); contato e links em `profile.ts`. O CV baixável está em `public/assets/`.

## Fluxo com agents (Claude Code)

Agents em `.claude/agents/`: `product-owner` → `tech-spec-writer` → `feature-builder` (`angular-specialist` / `deploy-specialist` + revisão `council-judge`) → `qa-test-designer`. Detalhes em [CLAUDE.md](CLAUDE.md).
