import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { CONTENT, canonicalPath, isLang } from '../../core/data/content';
import { Lang } from '../../core/data/content.model';
import { SeoService } from '../../core/seo/seo.service';
import { About } from '../../features/about';
import { Contact } from '../../features/contact';
import { Education } from '../../features/education';
import { Experience } from '../../features/experience';
import { Hero } from '../../features/hero';
import { OpenSource } from '../../features/open-source';
import { SiteNav } from '../../features/site-chrome';
import { Stack } from '../../features/stack';

@Component({
  selector: 'app-portfolio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiteNav, Hero, About, Stack, Experience, OpenSource, Education, Contact],
  templateUrl: './portfolio.html',
})
export default class Portfolio {
  readonly lang = input<Lang, unknown>('pt', { transform: (v) => (isLang(v) ? v : 'pt') });

  protected readonly content = computed(() => CONTENT[this.lang()]);

  private readonly seo = inject(SeoService);

  constructor() {
    effect(() => {
      const { meta, htmlLang, lang } = this.content();
      this.seo.update({
        ...meta,
        htmlLang,
        path: canonicalPath(lang),
        alternates: ['pt', 'en'],
      });
    });
  }

  // With <base href>, "#main" resolves to the site root and would navigate away from the current page.
  protected skipToMain(event: Event, main: HTMLElement): void {
    event.preventDefault();
    main.focus();
  }
}
