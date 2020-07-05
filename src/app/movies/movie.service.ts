import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
export class MovieService {
  apiKey: string = "be286a21";
  URI: string = "";

  constructor(private http: HttpClient) { 
    this.URI = `http://www.omdbapi.com/?apikey=${this.apiKey}&`;
  }

  getMovies(movieTitle: string, movieYear: string) {
    return this.http.get(`${this.URI}s=${movieTitle}&y=${movieYear}&type=movie`)
  }

  getMovieData(movieID: string) {
    return this.http.get(`${this.URI}i=${movieID}`);
  }
}
