import { Component, OnInit, Input } from '@angular/core';
import { MakerService } from '../maker.service'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  buttonColor: string = '#000';
  constructor(
    private makerService: MakerService
  ) { }

  ngOnInit() {}

  @Input() maker: Array<any>;
  @Input() werkers: any;
  @Input() i: any;

  favorite = (i) => {
    let ids = { makerId: this.maker['id'], werkerId: this.werkers[i].id, type: 'maker' };
    if (this.buttonColor === '#000') {
      this.buttonColor = '#dddddd'
      console.log('fav');
      this.makerService.fav(ids).subscribe(response => {
        console.log(response);
      })
    } else {
      this.buttonColor = '#000'
      console.log('unfav');
      this.makerService.unFav(ids).subscribe(response => {
        console.log(response);
      })
    }
  }
}
