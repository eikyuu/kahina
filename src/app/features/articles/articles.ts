import { Component } from '@angular/core';
import { CardArticles } from "./components/card-articles/card-articles";

@Component({
  selector: 'app-articles',
  imports: [CardArticles],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {}
