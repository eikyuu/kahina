import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Article } from '../../../../core/models/article.model';

@Component({
  selector: 'app-card-articles',
  imports: [ButtonModule, CardModule],
  templateUrl: './articles-card.html',
  styleUrl: './articles-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesCard {
  article = input.required<Article>();
}
