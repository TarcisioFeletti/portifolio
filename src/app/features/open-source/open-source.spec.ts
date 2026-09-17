import { TestBed } from '@angular/core/testing';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { OpenSource } from './open-source';

describe('OpenSource', () => {
  it.each(['pt', 'en'] as const)('renders the repo link and stack for %s', async (lang) => {
    const fixture = TestBed.createComponent(OpenSource);
    fixture.componentRef.setInput('openSource', CONTENT[lang].openSource);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    const link = el.querySelector('a.cta');
    expect(link?.getAttribute('href')).toBe('https://github.com/TarcisioFeletti/portifolio');
    expect(link?.getAttribute('href')).toBe(PROFILE.repo);
    expect(el.querySelector('.stack')?.textContent).toContain(CONTENT[lang].openSource.stack);
  });
});
