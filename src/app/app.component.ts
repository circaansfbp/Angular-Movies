import { Component } from '@angular/core';
import { MovieService } from './movies/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'Buscapelis';
  movieTitle: string;
  movieYear: string;

  movieData: any;

  constructor( private movieService: MovieService ) { }
  
  searchMovies(): void {
    this.movieService.getMovies(this.movieTitle, this.movieYear)
      .subscribe(res => {
        this.movieData = res;
      }, err => console.log(err));
  }

}
