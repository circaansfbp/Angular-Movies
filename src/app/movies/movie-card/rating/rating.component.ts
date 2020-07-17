import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() ratings: any[];
  rottenTomatoes: string;
  stars: number = 0;
  icons: any = new Array(this.stars).fill(1);
  showRating: boolean = true;

  constructor() { }

  ngOnChanges(): void {
    if (this.ratings.length < 2) {
      this.showRating = false;
    } else {
      this.rottenTomatoes = this.ratings[1].Value;
      this.rottenTomatoes = this.rottenTomatoes.replace("%", "");

      if (Number(this.rottenTomatoes) >= 0 && Number(this.rottenTomatoes) < 20) this.stars = 1;

      else if (Number(this.rottenTomatoes) >= 20 && Number(this.rottenTomatoes) < 40) this.stars = 2;

      else if (Number(this.rottenTomatoes) >= 40 && Number(this.rottenTomatoes) < 60) this.stars = 3;

      else if (Number(this.rottenTomatoes) >= 60 && Number(this.rottenTomatoes) < 80) this.stars = 4;

      else this.stars = 5;

      this.icons = new Array(this.stars).fill(1);
    }

  }

}
