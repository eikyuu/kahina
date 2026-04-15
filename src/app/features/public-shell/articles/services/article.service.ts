import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of, retry, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ARTICLES } from '../../../../core/core.providers';
import { Article } from '../../../../core/models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  private httpClient = inject(HttpClient);
  ARTICLES_MOCK = ARTICLES;

  getArticles() {
    if (environment.useMock) {

      console.info('<---- USE MOCK ! <ArticleService> ---->');

      return of(this.ARTICLES_MOCK['hydra:member']);
    }

    return this.httpClient.get<Article[]>(`${environment.baseUrlApi}/articles`).pipe(
      retry(2),
      catchError((error) => {
        console.error('Error fetching articles:', error);
        return throwError(() => new Error('Failed to fetch articles'));
      })
    );
  }

}
