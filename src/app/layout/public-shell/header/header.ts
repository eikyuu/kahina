import { Component, computed, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from "primeng/menubar";
import { AuthService } from '../../../core/core.providers';

@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private readonly authService = inject(AuthService);

  private readonly user = this.authService.user;

  readonly items = computed<MenuItem[]>(() => [
    { label: 'Kahina', routerLink: '/' },
    { label: 'Ajouter un article', routerLink: '/add-article' },
    ...this.user()
      ? [{ label: 'Déconnexion', command: () => this.authService.logout() }]
      : [{ label: 'Connexion', routerLink: '/auth/login' }],
  ]);
}
