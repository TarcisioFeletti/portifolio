import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CONTENT } from '../../core/data/content';
import { PROFILE } from '../../core/data/profile';
import { SiteNav } from './site-nav';

describe('SiteNav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it.each(['pt', 'en'] as const)(
    'renders the brand, six section links and the switch for %s',
    async (lang) => {
      const fixture = TestBed.createComponent(SiteNav);
      fixture.componentRef.setInput('nav', CONTENT[lang].nav);
      fixture.componentRef.setInput('lang', lang);
      await fixture.whenStable();
      const el: HTMLElement = fixture.nativeElement;

      expect(el.querySelector('.brand')?.textContent).toContain(PROFILE.name);

      const links = Array.from(el.querySelectorAll('.link'));
      expect(links.map((link) => link.getAttribute('href')?.split('#').at(-1))).toEqual([
        'sobre',
        'stack',
        'carreira',
        'projetos',
        'formacao',
        'contato',
      ]);

      expect(el.querySelector('.lang')?.textContent?.trim()).toBe(CONTENT[lang].nav.switchLabel);
    },
  );

  it('toggles the mobile menu and closes it after choosing a section', async () => {
    const fixture = TestBed.createComponent(SiteNav);
    fixture.componentRef.setInput('nav', CONTENT.pt.nav);
    fixture.componentRef.setInput('lang', 'pt');
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;
    const toggle = el.querySelector('button.toggle') as HTMLButtonElement;
    const links = el.querySelector('#nav-links') as HTMLElement;

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-controls')).toBe('nav-links');

    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(links.classList).toContain('open');

    (el.querySelector('.link') as HTMLAnchorElement).click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(links.classList).not.toContain('open');
  });
});
