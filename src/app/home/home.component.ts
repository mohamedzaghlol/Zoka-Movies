import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesService: MoviesService) { }
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  pageNumbers: Number[] = [];
  currentPage = 1;
  currentPage1 = 1;
  currentPage2 = 1;



  imgPrefix: string = 'https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {

    for (let i = 1; i < 11; i++) {
      this.pageNumbers.push(i);
    }

    this._MoviesService.getTrending('movie', 1).subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 10);

    })
    this._MoviesService.getTrending('tv', 1).subscribe((response) => {
      this.trendingTv = response.results.slice(0, 10);

    })
    this._MoviesService.getTrending('person', 1).subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 10);

    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
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

  changePage(ind: any) {
    this.currentPage = ind;

    this._MoviesService.getTrending('movie', this.currentPage).subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 10);
    })
  }
  prev() {
    this.changePage(this.currentPage - 1)

  }
  next() {
    this.changePage(this.currentPage + 1)

  }
  changePage1(ind: any) {
    this.currentPage1 = ind;
    this._MoviesService.getTrending('tv', this.currentPage1).subscribe((response) => {
      this.trendingTv = response.results.slice(0, 10);

    })


  }
  prev1() {
    this.changePage1(this.currentPage1 - 1)

  }
  next1() {
    this.changePage1(this.currentPage1 + 1)

  }

  changePage2(ind: any) {
    this.currentPage2 = ind;

    this._MoviesService.getTrending('person', this.currentPage2).subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 10);

    })

  }
  prev2() {
    this.changePage2(this.currentPage2 - 1)

  }
  next2() {
    this.changePage2(this.currentPage2 + 1)

  }

}
