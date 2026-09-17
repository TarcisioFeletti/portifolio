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
    expect(links.length).toBe(CONTENT[lang].nav.sections.length);
    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/#[a-z]+$/);
    }

    expect(el.querySelector('.lang')?.textContent?.trim()).toBe(CONTENT[lang].nav.switchLabel);
  });
});
