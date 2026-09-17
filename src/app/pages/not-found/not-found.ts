import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <main class="not-found" aria-labelledby="nf-title">
      <p class="label">Erro 404</p>
      <h1 id="nf-title" class="title">Página não encontrada</h1>
      <p class="body">O endereço acessado não existe ou foi movido.</p>
      <a class="back" routerLink="/">Voltar para o início →</a>
    </main>
  `,
  styles: `
    .not-found {
      display: grid;
      align-content: center;
      gap: 18px;
      min-height: 100dvh;
      padding: var(--section-pad) var(--gutter);
    }
    .title {
      font-family: var(--font-display);
      color: var(--color-text-strong);
      font-weight: 400;
      font-size: clamp(46px, 11vw, 140px);
      line-height: 0.9;
      text-transform: uppercase;
    }
    .body {
      color: var(--color-text-soft);
    }
    .back {
      justify-self: start;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 2px solid var(--color-accent);
      padding-bottom: 3px;
    }
  `,
})
export default class NotFound {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Página não encontrada | Tarcisio Feletti',
      description: 'O endereço acessado não existe ou foi movido.',
      locale: 'pt_BR',
      htmlLang: 'pt-BR',
      path: '/404',
      noindex: true,
    });
  }
}
