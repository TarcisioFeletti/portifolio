import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { Hero } from './hero';

describe('Hero', () => {
  it.each(['pt', 'en'] as const)(
    'renders name, role, value prop and highlights for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Hero);
      fixture.componentRef.setInput('hero', CONTENT[lang].hero);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;
      const hero = CONTENT[lang].hero;

      expect(el.querySelector('h1')?.textContent).toContain(PROFILE.name);
      expect(el.querySelector('.role')?.textContent).toContain(hero.role);
      expect(el.querySelector('.value-prop')?.textContent).toContain(hero.valueProp);
      expect(el.querySelector('img')?.getAttribute('alt')).toBe(hero.portraitAlt);
      expect(el.querySelectorAll('.highlights li').length).toBe(hero.highlights.length);
    },
  );

  it.each(['pt', 'en'] as const)(
    'puts the mail CTA first, then LinkedIn, the CV download and GitHub for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Hero);
      fixture.componentRef.setInput('hero', CONTENT[lang].hero);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const primaries = el.querySelectorAll('.cta-primary');
      expect(primaries.length).toBe(1);
      expect(primaries[0]?.textContent?.trim()).toBe(CONTENT[lang].hero.ctaMail);

      const hrefs = Array.from(el.querySelectorAll('.ctas a')).map((a) => a.getAttribute('href'));
      expect(hrefs).toEqual([
        `mailto:${PROFILE.email}`,
        PROFILE.socials[0].url,
        PROFILE.cvPath,
        PROFILE.socials[1].url,
      ]);

      const cv = el.querySelector('a.cta-cv');
      expect(cv?.getAttribute('download')).toBe(PROFILE.cvFileName);
      expect(cv?.getAttribute('href')?.startsWith('/')).toBe(false);
    },
  );
});
