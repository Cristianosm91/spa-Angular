import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;
}

