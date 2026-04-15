import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login.component').then((m) => m.LoginComponent),
    title: 'Sign In — kahina',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
