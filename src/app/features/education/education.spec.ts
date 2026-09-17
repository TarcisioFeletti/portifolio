import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { Education } from './education';

describe('Education', () => {
  it.each(['pt', 'en'] as const)(
    'renders the first course as the h3, certs as one line and the research body for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Education);
      fixture.componentRef.setInput('education', CONTENT[lang].education);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const education = CONTENT[lang].education;
      const firstCourse = education.items.at(0);
      expect(firstCourse).toBeDefined();
      expect(el.querySelector('h3')?.textContent).toContain(firstCourse?.course);

      expect(el.querySelectorAll('.cert').length).toBe(0);
      const certParagraphs = el.querySelectorAll('.certs');
      expect(certParagraphs.length).toBe(1);
      const certsText = certParagraphs[0]?.textContent ?? '';
      for (const cert of education.certs) {
        expect(certsText).toContain(cert);
      }

      expect(el.textContent).toContain(education.research.body);
    },
  );
});
