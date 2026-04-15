import { Component } from '@angular/core';
import { Articles } from '../articles/articles';
import { Animes } from "../animes/animes";

@Component({
  selector: 'app-home',
  imports: [Articles, Animes],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
