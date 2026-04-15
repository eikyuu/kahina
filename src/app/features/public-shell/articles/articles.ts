import { Component } from '@angular/core';
import { ArticlesList } from "./components/articles-list/articles-list";

@Component({
  selector: 'app-articles',
  imports: [ArticlesList],
  templateUrl: './articles.html',
  styleUrl: './articles.scss',
})
export class Articles {}
