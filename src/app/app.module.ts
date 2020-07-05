import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { SearchFieldsComponent } from './search/search-fields/search-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    SearchFieldsComponent
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
