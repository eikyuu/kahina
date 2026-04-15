import { Component } from '@angular/core';
import { AnimeCard } from "./components/anime-card/anime-card";
import { SlicePipe } from '@angular/common';
import { AnimeList } from "./components/anime-list/anime-list";


@Component({
  selector: 'app-animes',
  imports: [AnimeCard, SlicePipe, AnimeList],
  templateUrl: './animes.html',
  styleUrl: './animes.scss',
})
export class Animes {


}
