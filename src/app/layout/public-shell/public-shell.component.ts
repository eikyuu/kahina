import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Header } from "./header/header";

/**
 * Minimal layout wrapper for public (unauthenticated) pages.
 * No sidebar, no user menu — just a branded top bar and a centered content area.
 */
@Component({
  selector: 'app-public-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MenubarModule, Header],
  styleUrl: './public-shell.component.scss',
  template: `
    <div class="public-shell">

      
      <app-header/>

      <img [src]="background" alt="Kahina Logo" width="100%" height="100%" />

      <main class="main" id="main-content" tabindex="-1">
        <router-outlet />
      </main>

      <footer class="footer" role="contentinfo">
        <p>&copy; {{ year }} kahina. All rights reserved.</p>
      </footer>
    </div>
  `,
})
export class PublicShellComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly background = 'background.webp';

}
