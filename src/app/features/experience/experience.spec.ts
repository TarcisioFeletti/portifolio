import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { Experience } from './experience';

describe('Experience', () => {
  it.each(['pt', 'en'] as const)(
    'renders jobs in order with tech tags and highlights for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Experience);
      fixture.componentRef.setInput('experience', CONTENT[lang].experience);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;
      const jobs = CONTENT[lang].experience.jobs;

      expect(Array.from(el.querySelectorAll('.job-role')).map((n) => n.textContent)).toEqual(
        jobs.map((job) => job.role),
      );
      expect(Array.from(el.querySelectorAll('.job-org')).map((n) => n.textContent)).toEqual(
        jobs.map((job) => `@${job.org}`),
      );

      const rendered = el.querySelectorAll('.job');
      jobs.forEach((job, i) => {
        expect(rendered[i]?.querySelectorAll('.tag').length).toBe(job.tech.length);
        expect(rendered[i]?.querySelectorAll('.job-highlights li').length).toBe(
          job.highlights.length,
        );
      });
      expect(rendered[2]?.querySelector('.job-highlights')).toBeNull();
    },
  );
});
