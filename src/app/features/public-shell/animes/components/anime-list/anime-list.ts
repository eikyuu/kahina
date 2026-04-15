import { Component, inject, signal } from '@angular/core';
import { AnimesService } from '../../services/animes.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { AnimeCard } from "../anime-card/anime-card";
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-anime-list',
  imports: [AnimeCard, SlicePipe],
  templateUrl: './anime-list.html',
  styleUrl: './anime-list.scss',
})
export class AnimeList {
  animeService = inject(AnimesService);

  loading = signal(true);

  animes = toSignal(this.animeService.getAnimes().pipe(tap(() => this.loading.set(false))), {
    initialValue: [],
  });

  onCardClick(anime: any): void {
    console.log('Anime card clicked:', anime);
  }
}
