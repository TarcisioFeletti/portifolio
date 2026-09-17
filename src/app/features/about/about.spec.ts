import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { About } from './about';

describe('About', () => {
  it.each(['pt', 'en'] as const)(
    'renders the numbered heading, paragraphs and stats for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(About);
      fixture.componentRef.setInput('about', CONTENT[lang].about);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;
      const about = CONTENT[lang].about;

      expect(el.querySelector('.kicker')?.textContent?.trim()).toBe(`[ 01 ] ${about.kicker}`);
      expect(el.querySelector('h2')?.id).toBe('about-title');
      expect(el.querySelector('h2 .highlight')?.textContent).toBe(about.title.highlight);
      expect(Array.from(el.querySelectorAll('.body p')).map((p) => p.textContent)).toEqual(
        about.paragraphs,
      );
      expect(el.querySelectorAll('dl.stats .stat').length).toBe(about.stats.length);
    },
  );
});
