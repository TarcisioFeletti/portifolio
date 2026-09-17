import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { Contact } from './contact';

describe('Contact', () => {
  it.each(['pt', 'en'] as const)(
    'renders e-mail, socials, location, copyright and source link for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Contact);
      fixture.componentRef.setInput('contact', CONTENT[lang].contact);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const hrefs = Array.from(el.querySelectorAll('a')).map((a) => a.getAttribute('href'));
      expect(hrefs).toEqual([
        `mailto:${PROFILE.email}`,
        PROFILE.socials[0].url,
        PROFILE.cvPath,
        PROFILE.socials[1].url,
        PROFILE.repo,
      ]);

      const cv = el.querySelector('a.cta-cv');
      expect(cv?.getAttribute('download')).toBe(PROFILE.cvFileName);
      expect(cv?.textContent?.trim()).toBe(CONTENT[lang].contact.ctaCv);

      expect(el.textContent).toContain(CONTENT[lang].contact.location);
      expect(el.querySelector('.copyright')?.textContent).toContain(String(PROFILE.year));
    },
  );
});
