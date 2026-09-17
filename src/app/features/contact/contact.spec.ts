import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { Contact } from './contact';

describe('Contact', () => {
  it.each(['pt', 'en'] as const)(
    'renders e-mail, socials, location and copyright for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Contact);
      fixture.componentRef.setInput('contact', CONTENT[lang].contact);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const hrefs = Array.from(el.querySelectorAll('a')).map((a) => a.getAttribute('href'));
      expect(hrefs).toContain(`mailto:${PROFILE.email}`);
      expect(hrefs).toContain(PROFILE.socials[0].url);
      expect(hrefs).toContain(PROFILE.socials[1].url);
      expect(hrefs.some((href) => href?.startsWith('tel:'))).toBe(false);

      expect(el.textContent).toContain(CONTENT[lang].contact.location);
      expect(el.textContent).toContain(String(PROFILE.year));
    },
  );
});
