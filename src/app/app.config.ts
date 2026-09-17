import { DOCUMENT, ViewportScroller } from '@angular/common';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    provideClientHydration(withEventReplay()),
    // Router anchor scrolling uses window.scrollTo and ignores CSS scroll-padding-top.
    provideAppInitializer(() => {
      const document = inject(DOCUMENT);
      inject(ViewportScroller).setOffset(() => [
        0,
        document.querySelector('app-site-nav nav')?.getBoundingClientRect().height ?? 0,
      ]);
    }),
  ],
};
