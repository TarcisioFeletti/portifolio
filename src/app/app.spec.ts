import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { withComponentInputBinding } from '@angular/router';
import { DOCUMENT } from '@angular/core';

describe('App routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  it('renders the Portuguese portfolio at the root', async () => {
    const harness = await RouterTestingHarness.create('/');
    const el = harness.routeNativeElement as HTMLElement;

    expect(el.querySelector('h1')?.textContent).toContain('Desenvolvedor');
    expect(el.querySelector('.lang')?.textContent?.trim()).toBe('EN');
    expect(TestBed.inject(DOCUMENT).documentElement.lang).toBe('pt-BR');
  });

  it('renders the English portfolio at /en', async () => {
    const harness = await RouterTestingHarness.create('/en');
    const el = harness.routeNativeElement as HTMLElement;

    expect(el.querySelector('h1')?.textContent).toContain('Developer');
    expect(el.querySelector('.lang')?.textContent?.trim()).toBe('PT');
    expect(TestBed.inject(DOCUMENT).documentElement.lang).toBe('en');
  });

  it('renders the not-found page for unknown paths', async () => {
    const harness = await RouterTestingHarness.create('/nao-existe');
    expect((harness.routeNativeElement as HTMLElement).querySelector('h1')?.textContent).toContain(
      'Página não encontrada',
    );
  });
});
