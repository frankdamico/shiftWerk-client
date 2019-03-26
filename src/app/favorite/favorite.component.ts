import { Component, OnInit, Input } from '@angular/core';
import { MakerService } from '../maker.service'

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"]
})
export class FavoriteComponent implements OnInit {
  buttonColor: string = "#4e4747";
  constructor(private makerService: MakerService) {}

  ngOnInit() {}

  @Input() maker: Array<any>;
  @Input() werkers: any;
  @Input() i: any;

  favorite = i => {
    let ids = {
      makerId: this.maker["id"],
      werkerId: this.werkers[i].id,
      type: "maker"
    };
    if (this.buttonColor === "#4e4747") {
      this.buttonColor = "#ff6666";
      console.log("fav");
      this.makerService.fav(ids).subscribe(response => {
        console.log(response);
      });
    } else {
      this.buttonColor = "#4e4747";
      console.log("unfav");
      this.makerService.unFav(ids).subscribe(response => {
        console.log(response);
      });
    }
  };
}
