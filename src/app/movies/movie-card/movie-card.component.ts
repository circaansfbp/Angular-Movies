import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnChanges {
  @Input() movies: any;
  dataArray: any;
  movieArray: any[] = new Array();

  constructor(private movieService: MovieService) { }

  ngOnChanges(): void {
    if (this.movies.Response === "False") {
      alert("No se encontraron películas para los parámetros ingresados!");
    } else {
      this.dataArray = this.movies.Search;

      if (this.movieArray.length > 0) this.movieArray = [];

      this.dataArray.forEach(movie => {
        this.movieService.getMovieData(movie.imdbID)
          .subscribe(res => {
            this.movieArray.push(res);
          });
      });
    }

  }
}
