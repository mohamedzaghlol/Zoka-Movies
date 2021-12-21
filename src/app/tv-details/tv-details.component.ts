import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  id: string = "";
  tvDetails: any = {};
  posterPath: string = `https://image.tmdb.org/t/p/original/`;



  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getTvDetails(this.id).subscribe((Response) => {
      this.tvDetails = Response
    });

  }

}
