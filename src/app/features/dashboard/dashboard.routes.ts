import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/dashboard.component').then((m) => m.DashboardComponent),
    title: 'Dashboard — kahina',
  },
  { 
    path: 'add-anime',
    loadComponent: () =>
      import('../animes/components/anime-form/anime-form').then((m) => m.AnimeForm),
    title: 'Ajouter un anime — kahina',
  }
];
