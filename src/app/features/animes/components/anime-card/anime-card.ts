import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Anime } from '../../../../core/models/anime.model';

@Component({
  selector: 'app-anime-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './anime-card.html',
  styleUrl: './anime-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimeCard {
  anime = input.required<Anime>();
  cardClick = output<Anime>();
}
