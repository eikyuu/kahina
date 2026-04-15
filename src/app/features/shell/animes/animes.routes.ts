import { Routes } from '@angular/router';

export const ANIMES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./animes').then((m) => m.Animes),
    title: 'Animes — kahina',
  },
];
