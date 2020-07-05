import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movies/movie.service';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.css']
})

export class SearchFieldsComponent implements OnInit {
  titleInput: string;
  yearInput: string;
  movie = undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies(this.titleInput, this.yearInput)
    .subscribe(res => {
      console.log(res);
      this.movie = res;
    }, err => console.log(err));
  }

  public getMovieData() {
    if (this.movie) {
      return this.movie;
    }
  }
}
