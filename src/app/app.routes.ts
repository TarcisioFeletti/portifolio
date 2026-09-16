import { Routes } from '@angular/router';

const loadPortfolio = () => import('./pages/portfolio/portfolio');

export const routes: Routes = [
  { path: '', loadComponent: loadPortfolio, data: { lang: 'pt' } },
  { path: 'en', loadComponent: loadPortfolio, data: { lang: 'en' } },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found') },
];
