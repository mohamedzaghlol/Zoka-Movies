import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  constructor(private _MoviesService: MoviesService) { }
  trendingTv: any[] = [];
  pageNumbers: Number[] = [];
  currentPage1 = 1;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    for (let i = 1; i < 11; i++) {
      this.pageNumbers.push(i);
    }


    this._MoviesService.getTrending('tv', 1).subscribe((response) => {
      this.trendingTv = response.results.slice(0, 20);

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

  changePage1(ind: any) {
    this.currentPage1 = ind;
    this._MoviesService.getTrending('tv', this.currentPage1).subscribe((response) => {
      this.trendingTv = response.results.slice(0, 20);

    })


  }
  prev1() {
    this.changePage1(this.currentPage1 - 1)

  }
  next1() {
    this.changePage1(this.currentPage1 + 1)

  }
}
