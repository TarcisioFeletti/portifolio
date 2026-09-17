# US-001 — Portfólio v4 "enxuta": layout sóbrio e focado no recrutador

> Área: página única (PT `/` e EN `/en/`) · Prioridade: Alta · Status: Aprovada

## História

Como **recrutador(a) olhando o portfólio pelo celular**, quero **entender em poucos segundos quem é o Tarcisio, qual a stack, onde trabalhou e como contatá-lo, sem ruído visual**, para **decidir rápido se ele serve para a vaga e chamá-lo**.

> _Contexto: o v3 "film reel" publicado tem grão, scanlines, HUD de câmera, adesivos girados e cinco cores de destaque. O recrutador passa cerca de 8 s na página e se perde na decoração antes de achar stack, experiência e contato. Um tech lead também lê esse excesso como falta de critério. Referência: brittanychiang.com (uma coluna, uma cor de destaque, bastante respiro, experiência com datas e tags)._

Personas secundárias: **tech lead** (quer ver clientes, papel e stack por emprego e o código deste portfólio) e **Tarcisio (mantenedor)** (quer um modelo de conteúdo menor, sem campos decorativos).

## Critérios de aceitação

### Estrutura e ruído visual

- **AC-01** — Dado que abro `/` ou `/en/`, quando a página carrega, então não aparecem: overlay de grão/scanlines, HUD do topo (ponto REC, "Take 01", texto ISO/fps), a placa do retrato com adesivos, a faixa de leituras com o monograma "TF/26", o marquee da seção Sobre, a seção Projetos nem nenhum elemento rotacionado (adesivos ou chips da stack).
- **AC-02** — Dado que percorro a página, então as seções aparecem em uma coluna, alinhadas à esquerda, nesta ordem: nav, Hero, Sobre, Stack, Experiência, projeto público (este portfólio), Formação, Contato/rodapé.
- **AC-03** — Dado qualquer elemento da página, então a única cor de destaque é o token amarelo atual, usado só em links, no CTA principal, nas datas e nos estados de foco. Não aparecem teal, rosa, laranja ou verde, e o restante usa tons neutros sobre o fundo escuro.
- **AC-04** — Dado qualquer título, então a fonte Anton aparece só no nome e nos títulos de seção, em tamanho contido. O corpo usa Archivo e os metadados (datas, tags) usam JetBrains Mono.

### Nav e Hero

- **AC-05** — Dado que rolo a página, então a nav continua fixa no topo e mostra o nome "Tarcisio Feletti" escrito (sem o selo "TF"), os links das seções existentes (sem "Projetos") e a troca PT/EN. Cada link leva à seção certa nas duas línguas, inclusive com o site servido em `/<repo>/`.
- **AC-06** — Dado que abro a página num celular de 360×640 (e no mínimo em 320px de largura), então vejo acima da dobra, sem rolar: um retrato pequeno (entre 120 e 160 px, sem adesivos nem legendas), o nome, o cargo, uma linha de proposta de valor (4+ anos, Java/Spring + Angular, remoto) e os CTAs de LinkedIn, e-mail e GitHub.
- **AC-07** — Dado os CTAs do Hero, quando os aciono, então o e-mail abre `mailto:` e LinkedIn/GitHub abrem os perfis corretos. Só um deles tem o estilo de CTA principal.

### Conteúdo das seções

- **AC-08** — Dado a seção Sobre, então ela mostra os 2 parágrafos atuais e os 3 números (stats) com estilo neutro, sem uma cor por número.
- **AC-09** — Dado a seção Stack, então as tecnologias aparecem como tags retas ou listas agrupadas, com a mesma cor neutra, sem rotação.
- **AC-10** — Dado a seção Experiência, então os empregos aparecem do mais recente para o mais antigo. Cada um mostra cargo, empresa, período, stack e resumo. Os clientes (ArcelorMittal e WeDo/Comunify na Optsolv; Unimed Goiânia e Risch Law Firm na Itix) aparecem como itens dentro do emprego, cada um com o produto (o que é), o papel do Tarcisio e a stack. Nenhum conteúdo da antiga seção Projetos se perde sem ter ido para esses itens.
- **AC-11** — Dado o bloco do projeto público depois da Experiência, então ele apresenta "este portfólio" com uma descrição curta, a stack e um link para https://github.com/TarcisioFeletti/portifolio que abre o repositório.
- **AC-12** — Dado a seção Formação, então o bacharelado da UFES é o item de maior destaque, as certificações aparecem numa linha simples de texto (sem pílulas) e a pesquisa continua presente, em tamanho pequeno.
- **AC-13** — Dado o Contato/rodapé, então ele mostra e-mail, LinkedIn, GitHub e localização, com links funcionando. Telefone e download de CV continuam fora.

### Idiomas, acessibilidade e qualidade

- **AC-14** — Dado as versões PT e EN, então as duas mostram a mesma estrutura com o texto traduzido, e `content.spec.ts` passa com o modelo reduzido (sem as chaves `hud`, `plate`, `strip`, `about.marquee`, os rótulos `reel` e `projects`).
- **AC-15** — Dado a página nas duas línguas, então todo texto e todo estado de foco atingem contraste WCAG AA, a navegação por teclado segue a ordem visual com foco visível, o retrato tem `alt` descritivo e não há rolagem horizontal de 320px até o desktop.
- **AC-16** — Dado `prefers-reduced-motion: reduce`, então nada se move. Sem essa preferência, também não sobra animação decorativa (transições de hover/foco são permitidas).
- **AC-17** — Dado o código da entrega, então `npm run lint`, `npm run test:ci` e `npm run build` (incluindo o build com `--base-href /portifolio/`) passam, e cada componente de feature novo ou alterado tem seu próprio spec cobrindo a renderização do conteúdo nas duas línguas.

## Regras

- **RN-01** — Uma cor de destaque só (amarelo). O tipo `Accent` e o pipe `accent` somem ou ficam reduzidos ao necessário. `profile.ts` perde os accents por rede social.
- **RN-02** — Todo texto novo ou reescrito (proposta de valor, itens de cliente, bloco do portfólio) entra em `content.pt.ts` e `content.en.ts` ao mesmo tempo.
- **RN-03** — As chaves do modelo que só servem a peças removidas saem de `content.model.ts` e das duas línguas. Nada de chave morta.
- **RN-04** — Experiência sempre do mais recente para o mais antigo. Períodos no formato já usado (`MM/AAAA — MM/AAAA`).
- **RN-05** — Os clientes são sistemas privados: nenhum item de cliente leva link ou captura de tela. O único link de código é o do portfólio.
- **RN-06** — Nenhum conteúdo inventado. Os textos dos itens de cliente vêm do conteúdo já escrito em `highlights` e na antiga seção `projects` (commit 9f669ef), só reorganizados.

## Conteúdo necessário

- **Retrato**: `public/assets/portrait.webp`, exibido entre 120 e 160 px. Se o recorte atual (com fundo) ficar ruim nesse tamanho, Tarcisio fornece um recorte quadrado.
- **Proposta de valor (PT/EN)**: uma linha com 4+ anos, Java/Spring + Angular e remoto. A redação final é validada pelo Tarcisio na revisão da implementação.
- **Itens de cliente**: produto, papel e stack de ArcelorMittal, WeDo/Comunify, Unimed Goiânia e Risch Law Firm, tirados do conteúdo existente.
- **Bloco "este portfólio" (PT/EN)**: descrição curta (1 frase), stack (Angular 22, SSG, GitHub Pages) e link https://github.com/TarcisioFeletti/portifolio.
- **Contato**: e-mail, LinkedIn e GitHub de `profile.ts`, e localização de `contact.location`.

## Exibição

- Mobile a partir de 320px (referência de acima da dobra: 360×640) e desktop numa coluna com largura máxima de leitura.
- Tema só escuro (decisão mantida, sem alternador).
- PT em `/` e EN em `/en/`, em sincronia.
- Design: **desvio explícito** do "Portfolio Tarcisio v3" (`design/portfolio-v3.dc.html`). Não há artboard v4. A referência visual é esta US mais brittanychiang.com. Do v3 ficam só os tokens de cor (fundo, neutros, amarelo) e a tipografia.

## Dependências

- Commit 9f669ef (limpeza de conteúdo) já na branch `feat/v4-enxuta`.
- Nenhuma dependência externa nova.

## Observações técnicas

- Mantém a arquitetura: dados tipados em `core/data`, serviço de SEO, rotas prerenderizadas, workflow de deploy e as invariantes do `CLAUDE.md`.
- Features que devem sumir ou encolher: `site-chrome` (film overlay, top HUD), `hero` (portrait-plate, readout-strip), `projects` (removida), além do marquee em `about` e de `CHIP_ROTATIONS` em `stack`.
- As utilidades globais `.hud`, `.ticks` e `.corners` devem ser revistas. O que ficar sem uso sai de `styles.scss`, e os tokens de accent sem uso saem de `tokens.css`.
- A meta description e o título de SEO não mudam nesta US, a menos que citem a seção Projetos.
- Esta US passa de 6 ACs de propósito: é um redesign coeso que o Tarcisio decidiu entregar de uma vez, e o conselho já o revisou. Se o TECH.md ficar grande demais, a implementação pode sair em commits por seção, mas o aceite é único.

## Melhorias futuras

- og:image / cartão de prévia para redes sociais.
- Limpeza do perfil do GitHub (README do perfil, repositórios fixados).
- Renomear o repositório/URL (`portifolio` → nome definitivo).
- Download do CV (hoje fora de propósito).
