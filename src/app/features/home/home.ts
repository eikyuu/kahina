import { Component } from '@angular/core';
import { ArticlesList } from "../articles/components/articles-list/articles-list";

@Component({
  selector: 'app-home',
  imports: [ArticlesList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
