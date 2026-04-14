import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../../../core/models/article.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  private httpClient = inject(HttpClient);

  getArticles() {
    if (environment.useMock) {
      return this.httpClient.get<Article[]>('/assets/mocks/articles.json');
    }
    
    return this.httpClient.get<Article[]>('/api/articles');
  }

}
