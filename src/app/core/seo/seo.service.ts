import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { canonicalPath } from '../data/content';
import { Lang } from '../data/content.model';
import { SITE } from '../data/profile';

export interface PageSeo {
  title: string;
  description: string;
  locale: string;
  htmlLang: string;
  path: string;
  alternates?: Lang[];
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(page: PageSeo): void {
    const url = `${SITE.url}${page.path}`;

    this.document.documentElement.lang = page.htmlLang;
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'robots', content: page.noindex ? 'noindex' : 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: page.locale });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.setLink('canonical', page.noindex ? null : url);
    for (const lang of page.alternates ?? []) {
      this.setLink(
        'alternate',
        `${SITE.url}${canonicalPath(lang)}`,
        lang === 'pt' ? 'pt-BR' : lang,
      );
    }
  }

  private setLink(rel: string, href: string | null, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let link = this.document.head.querySelector<HTMLLinkElement>(selector);
    if (!href) {
      link?.remove();
      return;
    }
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      this.document.head.appendChild(link);
    }
    link.href = href;
  }
}
