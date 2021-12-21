import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.css']
})
export class PersondetailsComponent implements OnInit {

  id: string = '';
  posterPath: string = `https://image.tmdb.org/t/p/original/`;
  personDetails: any = {};
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {


  }



  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getPeopleDetails(this.id).subscribe((Response) => {
      this.personDetails = Response;

    });
  }


}
