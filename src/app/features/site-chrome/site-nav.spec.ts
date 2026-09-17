import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { SiteNav } from './site-nav';

describe('SiteNav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it.each(['pt', 'en'] as const)('renders the brand and section links for %s', async (lang) => {
    const fixture = TestBed.createComponent(SiteNav);
    fixture.componentRef.setInput('nav', CONTENT[lang].nav);
    fixture.componentRef.setInput('lang', lang);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('.brand')?.textContent?.trim()).toBe(PROFILE.name);
    expect(el.querySelector('.brand-badge')).toBeNull();

    const links = Array.from(el.querySelectorAll('.link'));
    expect(links.length).toBe(4);
    expect(links.map((link) => link.getAttribute('href')?.split('#').at(-1))).toEqual([
      'sobre',
      'stack',
      'experiencia',
      'contato',
    ]);

    expect(el.querySelector('.lang')?.textContent?.trim()).toBe(CONTENT[lang].nav.switchLabel);
  });

  it('keeps brand before lang switch before the first section link in DOM order', async () => {
    const fixture = TestBed.createComponent(SiteNav);
    fixture.componentRef.setInput('nav', CONTENT.pt.nav);
    fixture.componentRef.setInput('lang', 'pt');
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    const brand = el.querySelector('.brand') as Node;
    const lang = el.querySelector('.lang') as Node;
    const firstLink = el.querySelector('.link') as Node;

    expect(brand.compareDocumentPosition(lang) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(lang.compareDocumentPosition(firstLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
