import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService: MoviesService) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
        items: 4
      }
    },
    nav: true
  }
  trendingMovies: any[] = [];
  pageNumbers: Number[] = [];
  currentPage = 1;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {

    for (let i = 1; i < 11; i++) {
      this.pageNumbers.push(i);
    }

    this._MoviesService.getTrending('movie', 1).subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 25);

    })


  }
  changePage(ind: any) {
    this.currentPage = ind;
    this._MoviesService.getTrending('movie', this.currentPage).subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 25);
    })
  }
  prev() {
    this.changePage(this.currentPage - 1)

  }
  next() {
    this.changePage(this.currentPage + 1)

  }

}
