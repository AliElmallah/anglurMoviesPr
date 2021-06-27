import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  prifiex:string='https://image.tmdb.org/t/p/w500/';
  trindingMovies:any=[];

  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getTrinding('movie').subscribe((data)=>{

      this.trindingMovies=data.results;

    })

   }

  ngOnInit(): void {
  }

}
