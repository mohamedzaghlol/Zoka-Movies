import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  getTrending(mediaType: string, pageNum: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=37090778d4ac845b3bd9bd6b9ed7ce21&language=en-US&page=${pageNum}`)

  }

  getMovieDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=37090778d4ac845b3bd9bd6b9ed7ce21&language=en-US`)

  }

  getPeopleDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=37090778d4ac845b3bd9bd6b9ed7ce21&language=en-US`)

  }

  getTvDetails(id: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=37090778d4ac845b3bd9bd6b9ed7ce21&language=en-US`)

  }


}
