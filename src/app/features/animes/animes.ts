import { Component } from '@angular/core';
import { AnimeList } from "./components/anime-list/anime-list";


@Component({
  selector: 'app-animes',
  imports: [AnimeList],
  templateUrl: './animes.html',
  styleUrl: './animes.scss',
})
export class Animes {


}
