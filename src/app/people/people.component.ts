import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trindingPerson:any=[];
  prifiex:string='https://image.tmdb.org/t/p/w500/';
  constructor(private _MoviesService:MoviesService) {

    this._MoviesService.getTrinding('person').subscribe((data)=>{

      this.trindingPerson =data.results
      console.log(this.trindingPerson);





    })

   }

  ngOnInit(): void {
  }

}
