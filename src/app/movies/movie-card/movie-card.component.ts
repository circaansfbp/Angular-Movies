import { Component, OnInit } from '@angular/core';
import { SearchFieldsComponent } from '../../search/search-fields/search-fields.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
  
export class MovieCardComponent implements OnInit {
  data: SearchFieldsComponent;
  movie: any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
