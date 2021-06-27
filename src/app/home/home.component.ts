import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prifiex:string='https://image.tmdb.org/t/p/w500/';
  trindingMovies:any=[];
  trindingTv:any=[];
  trindingPerson:any=[];
  trindingMoviesFiltter:any=[];

  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getTrinding('movie').subscribe((data)=>{
      this.trindingMovies=data.results;
      this.trindingMoviesFiltter=[...this.trindingMovies]
    })

    this._MoviesService.getTrinding('tv').subscribe((data)=>{
      this.trindingTv=data.results;
    })

    this._MoviesService.getTrinding('person').subscribe((data)=>{
      this.trindingPerson=data.results;
    })
   }


   
  ngOnInit(): void {
  }

  search(e:any){
    const val = e.target.value;
    if(val){
      this.trindingMoviesFiltter = this.trindingMovies.filter((el:any) => 
        el.title.toLowerCase().includes(val)
      )

    }else{
      this.trindingMoviesFiltter = [...this.trindingMovies]
    }
  }
}
