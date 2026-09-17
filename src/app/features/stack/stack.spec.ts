import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { Stack } from './stack';

describe('Stack', () => {
  it.each(['pt', 'en'] as const)(
    'renders one card per group with every item as a tag for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(Stack);
      fixture.componentRef.setInput('stack', CONTENT[lang].stack);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;
      const groups = CONTENT[lang].stack.groups;

      expect(el.querySelectorAll('.group').length).toBe(groups.length);
      expect(el.querySelectorAll('.tag').length).toBe(
        groups.reduce((sum, group) => sum + group.items.length, 0),
      );
    },
  );
});
