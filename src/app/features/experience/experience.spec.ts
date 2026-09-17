import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { Experience } from './experience';

describe('Experience', () => {
  it.each(['pt', 'en'] as const)(
    'renders jobs in content order with their clients for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Experience);
      fixture.componentRef.setInput('experience', CONTENT[lang].experience);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const jobs = CONTENT[lang].experience.jobs;
      const roles = Array.from(el.querySelectorAll('.job-role')).map((n) => n.textContent);
      expect(roles).toEqual(jobs.map((job) => job.role));

      const clientLists = el.querySelectorAll('.clients');
      expect(clientLists.length).toBe(jobs.filter((job) => job.clients.length > 0).length);

      const totalClients = jobs.reduce((sum, job) => sum + job.clients.length, 0);
      expect(el.querySelectorAll('.client').length).toBe(totalClients);

      for (const job of jobs) {
        for (const client of job.clients) {
          expect(el.textContent).toContain(client.name);
          expect(el.textContent).toContain(client.product);
          expect(el.textContent).toContain(client.role);
          expect(el.textContent).toContain(client.stack);
        }
      }

      expect(el.querySelectorAll('.clients a').length).toBe(0);
    },
  );
});
