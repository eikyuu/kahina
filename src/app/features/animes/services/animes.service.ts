import { inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { retry } from 'rxjs/internal/operators/retry';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../../../core/models/anime.model';
import { ANIMES } from '../../../core/core.providers';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  private httpClient = inject(HttpClient);
  ANIMES_MOCK = ANIMES;

  getAnimes() {
    if (environment.useMock) {

      console.info('<---- USE MOCK ! <AnimesService> ---->');
      return of(this.ANIMES_MOCK);
    }

    return this.httpClient.get<Anime[]>(`${environment.baseUrlApi}/animes`).pipe(
      retry(2),
      catchError((error) => {
        console.error('Error fetching animes:', error);
        return throwError(() => new Error('Failed to fetch animes'));
      })
    );

  }
}