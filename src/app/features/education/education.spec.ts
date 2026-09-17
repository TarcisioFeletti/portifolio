import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { Education } from './education';

describe('Education', () => {
  it.each(['pt', 'en'] as const)(
    'highlights the degree and lists the technical course and certs for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Education);
      fixture.componentRef.setInput('education', CONTENT[lang].education);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;
      const education = CONTENT[lang].education;

      expect(el.querySelector('h3.degree-course')?.textContent).toContain(education.degree.course);
      expect(el.querySelector('.degree-school')?.textContent).toContain(education.degree.school);
      expect(el.textContent).toContain(education.research.body);
      expect(el.textContent).toContain(education.technical.course);

      const certs = el.querySelector('.certs')?.textContent ?? '';
      for (const cert of education.certs) {
        expect(certs).toContain(cert);
      }
    },
  );
});
