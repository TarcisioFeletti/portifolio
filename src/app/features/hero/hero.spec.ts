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

  it('renders exactly one primary CTA and links to mail, LinkedIn and GitHub', async () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.componentRef.setInput('hero', CONTENT.pt.hero);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelectorAll('.cta-primary').length).toBe(1);

    const hrefs = Array.from(el.querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain(`mailto:${PROFILE.email}`);
    expect(hrefs).toContain(PROFILE.socials[0].url);
    expect(hrefs).toContain(PROFILE.socials[1].url);
  });
});
