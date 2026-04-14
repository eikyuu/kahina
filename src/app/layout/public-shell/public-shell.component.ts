import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { ImageModule } from 'primeng/image';

/**
 * Minimal layout wrapper for public (unauthenticated) pages.
 * No sidebar, no user menu — just a branded top bar and a centered content area.
 */
@Component({
  selector: 'app-public-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MenubarModule, Header, Footer, ImageModule],
  styleUrl: './public-shell.component.scss',
  template: `
    <div class="public-shell">

      <app-header/>

      <div class="banner-container">
        <p-image
          class="banner"
          [src]="banner"
          alt="banner image"
          width="100%"
          height="auto"
        />
      </div>

      <main class="main" id="main-content" tabindex="-1">
        <router-outlet />
      </main>

      <app-footer/>
    </div>
  `,
})
export class PublicShellComponent {
  protected readonly banner = 'background.webp';
}
