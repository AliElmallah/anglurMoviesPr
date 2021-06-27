import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trindingTv:any=[];
  prifiex:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTrinding('tv').subscribe((data)=>{
      this.trindingTv=data.results;

    })
   }

  ngOnInit(): void {
  }

}
