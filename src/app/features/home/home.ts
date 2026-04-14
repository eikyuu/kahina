import { Component } from '@angular/core';
import { Articles } from "../articles/articles";

@Component({
  selector: 'app-home',
  imports: [Articles],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
