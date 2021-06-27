import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

ActivatedRoute
@Component({
  selector: 'app-movedetails',
  templateUrl: './movedetails.component.html',
  styleUrls: ['./movedetails.component.scss']
})
export class MovedetailsComponent implements OnInit {
  id:string='';
  movieDetails:any={};
  prifiex:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService) { 
  this.id= this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getTrindingMovieDetails(this.id).subscribe((data)=>{
     this.movieDetails= data ;
     console.log(this.movieDetails);
    })
  }
  
  ngOnInit(): void {
  }

}
