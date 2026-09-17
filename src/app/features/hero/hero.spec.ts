import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { Hero } from './hero';

describe('Hero', () => {
  it.each(['pt', 'en'] as const)(
    'renders the name, role, value prop and alt for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Hero);
      fixture.componentRef.setInput('hero', CONTENT[lang].hero);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      expect(el.querySelector('h1')?.textContent).toContain(PROFILE.name);
      expect(el.querySelector('.role')?.textContent).toContain(CONTENT[lang].hero.role);
      expect(el.querySelector('.value-prop')?.textContent).toContain(CONTENT[lang].hero.valueProp);
      expect(el.querySelector('img')?.getAttribute('alt')).toBe(CONTENT[lang].hero.portraitAlt);
    },
  );

  it.each(['pt', 'en'] as const)(
    'renders exactly one primary CTA linking to LinkedIn, then mail, then GitHub for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Hero);
      fixture.componentRef.setInput('hero', CONTENT[lang].hero);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const primaries = el.querySelectorAll('.cta-primary');
      expect(primaries.length).toBe(1);
      expect(primaries[0]?.getAttribute('href')).toBe(PROFILE.socials[0].url);

      const hrefs = Array.from(el.querySelectorAll('a')).map((a) => a.getAttribute('href'));
      expect(hrefs).toEqual([
        PROFILE.socials[0].url,
        `mailto:${PROFILE.email}`,
        PROFILE.socials[1].url,
      ]);
    },
  );
});
