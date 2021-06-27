import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {
  trindingMovies:any=[];
  prifiex:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService) {
    this._MoviesService.getTrinding('movie').subscribe((data)=>{
      this.trindingMovies=data.results;
    })

   }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin:10,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
