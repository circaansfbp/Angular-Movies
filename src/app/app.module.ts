import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { RatingComponent } from './movies/movie-card/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
