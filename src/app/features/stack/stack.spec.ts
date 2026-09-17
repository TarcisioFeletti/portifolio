import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { Stack } from './stack';

describe('Stack', () => {
  it.each(['pt', 'en'] as const)(
    'renders every group item as a straight tag for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Stack);
      fixture.componentRef.setInput('stack', CONTENT[lang].stack);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      const groups = CONTENT[lang].stack.groups;
      const totalItems = groups.reduce((sum, group) => sum + group.items.length, 0);
      expect(el.querySelectorAll('.tag').length).toBe(totalItems);

      expect(el.querySelectorAll('[style*="transform"]').length).toBe(0);
      const tags = Array.from(el.querySelectorAll('.tag'));
      for (const tag of tags) {
        expect((tag as HTMLElement).style.transform).toBe('');
      }
    },
  );
});
