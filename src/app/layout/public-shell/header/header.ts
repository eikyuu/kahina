import { Component, computed, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule  } from "primeng/menubar";
import { AuthService } from '../../../core/core.providers';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private readonly authService = inject(AuthService);

  private readonly user = this.authService.user;

  readonly items = computed<MenuItem[]>(() => [
    { label: 'Kahina',  icon: 'pi pi-box', routerLink: '/' },
    { label: 'Ajouter un article', icon: 'pi pi-plus', routerLink: '/add-article' },
    ...this.user()
      ? [{ label: 'Déconnexion', icon: 'pi pi-sign-out', command: () => this.authService.logout() }]
      : [{ label: 'Connexion', icon: 'pi pi-sign-in', routerLink: '/auth/login' }],
  ]);
}
