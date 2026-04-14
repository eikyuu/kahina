import { Component, inject, signal } from '@angular/core';
import { ArticlesCard } from "../articles-card/articles-card";
import { ArticleService } from '../../services/article.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-articles',
  imports: [ArticlesCard],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss',
})
export class ArticlesList {

  articleService = inject(ArticleService);

  loading = signal(true);

  articles = toSignal(this.articleService.getArticles().pipe(tap(() => this.loading.set(false))), {
    initialValue: [],
  });

}
