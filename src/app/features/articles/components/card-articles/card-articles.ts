import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-articles',
  imports: [ButtonModule, CardModule],
  templateUrl: './card-articles.html',
  styleUrl: './card-articles.scss',
})
export class CardArticles {}
