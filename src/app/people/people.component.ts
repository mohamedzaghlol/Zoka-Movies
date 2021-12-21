import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService: MoviesService) { }
  trendingPeople: any[] = [];
  pageNumbers: Number[] = [];
  currentPage2 = 1;

  ngOnInit(): void {
    for (let i = 1; i < 11; i++) {
      this.pageNumbers.push(i);
    }

    this._MoviesService.getTrending('person', 1).subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 20);

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



  changePage2(ind: any) {
    this.currentPage2 = ind;

    this._MoviesService.getTrending('person', this.currentPage2).subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 20);

    })

  }
  prev2() {
    this.changePage2(this.currentPage2 - 1)

  }
  next2() {
    this.changePage2(this.currentPage2 + 1)

  }


}
