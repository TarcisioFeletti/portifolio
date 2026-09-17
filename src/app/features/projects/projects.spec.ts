import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { Projects } from './projects';

describe('Projects', () => {
  it.each(['pt', 'en'] as const)(
    'renders numbered projects and links only the public one for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Projects);
      fixture.componentRef.setInput('projects', CONTENT[lang].projects);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;
      const items = CONTENT[lang].projects.items;

      expect(el.querySelectorAll('article.project').length).toBe(items.length);
      expect(Array.from(el.querySelectorAll('.project-number')).map((n) => n.textContent)).toEqual(
        items.map((_, i) => String(i + 1).padStart(2, '0')),
      );
      expect(el.querySelectorAll('article.wide').length).toBe(2);

      const links = Array.from(el.querySelectorAll('a.project-link'));
      expect(links.map((a) => a.getAttribute('href'))).toEqual([PROFILE.repo]);
      expect(links[0]?.getAttribute('rel')).toBe('noopener noreferrer');
    },
  );
});
