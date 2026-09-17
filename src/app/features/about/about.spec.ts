import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { About } from './about';

describe('About', () => {
  it.each(['pt', 'en'] as const)(
    'renders the paragraphs and neutral stats for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(About);
      fixture.componentRef.setInput('about', CONTENT[lang].about);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const paragraphs = el.querySelectorAll('.body p');
      expect(paragraphs.length).toBe(2);
      expect(Array.from(paragraphs).map((p) => p.textContent)).toEqual(
        CONTENT[lang].about.paragraphs,
      );

      const stats = el.querySelectorAll('dl.stats .stat');
      expect(stats.length).toBe(3);

      expect(el.querySelector('.marquee')).toBeNull();
      expect(el.querySelectorAll('[style*="color"]').length).toBe(0);
    },
  );
});
