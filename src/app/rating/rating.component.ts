import { Component, Input, EventEmitter, Output } from "@angular/core";

enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html"
})


export class RatingComponent {
  @Input() rating: number;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

  constructor() { }

  /**
   * @function rate - changes the value of the rating, 
   * triggered when the user clicks a star to change the rating
   * sends the rating to the parent
   * @param index - index of the star clicked on
   */
  rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }

  /**
   * @function getColor - gets the color of the star based on the rating
   * 1-2 stars: red
   * 3 stars: yellow
   * 4-5 stars: green
   * unused stars are grey
   * @param index
   */
  getColor(index: number) {
    if(this.isAboveRating(index)) {
      return COLORS.GREY;
    }
    switch (this.rating) {
      case 1:
      case 2:
        return COLORS.RED;
      case 3:
        return COLORS.YELLOW
      case 4:
      case 5:
        return COLORS.GREEN
    }
  }

  /**
   * @function isAboveRating - determines if the selected index is above the current rating
   * @param index - index of current star
   */
  isAboveRating(index: number): boolean {
    return index > this.rating;
  }
}