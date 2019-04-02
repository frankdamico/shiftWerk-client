import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  buttonColor = '#4e4747';
  constructor(private userService: UserService) {}

  @Input() maker: Array<any>;
  @Input() werkers: any;
  @Input() i: any;

  ngOnInit() {}

  favorite = i => {
    const id = this.werkers[i].id;
    if (this.buttonColor === '#4e4747') {
      this.buttonColor = '#ff6666';
      console.log('fav');
      this.userService.fav(id).subscribe(response => {
        console.log(response);
      });
    } else {
      this.buttonColor = '#4e4747';
      console.log('unfav');
      this.userService.unFav(id).subscribe(response => {
        console.log(response);
      });
    }
  };
}
