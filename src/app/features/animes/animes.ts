import { Component, inject, signal } from '@angular/core';
import { AnimeCard } from "./components/anime-card/anime-card";
import { ANIMES } from '../../core/core.providers';
import { AnimesService } from './services/animes.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/internal/operators/tap';
import { SlicePipe } from '@angular/common';


@Component({
  selector: 'app-animes',
  imports: [AnimeCard, SlicePipe],
  templateUrl: './animes.html',
  styleUrl: './animes.scss',
})
export class Animes {

  animeService = inject(AnimesService);

  loading = signal(true);

  animes = toSignal(this.animeService.getAnimes().pipe(tap(() => this.loading.set(false))), {
    initialValue: [],
  });

  onCardClick(anime: any): void {
    console.log('Anime card clicked:', anime);
  }
}
