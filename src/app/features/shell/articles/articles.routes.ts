import { Routes } from '@angular/router';

export const ARTICLES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./articles').then((m) => m.Articles),
    title: 'Articles — kahina',
  },
];
