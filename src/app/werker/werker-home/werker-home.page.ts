import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';

@Component({
  selector: 'app-werker-home',
  templateUrl: './werker-home.page.html',
  styleUrls: ['./werker-home.page.scss'],
})
export class WerkerHomePage implements OnInit {

  constructor(
    private werkerService: WerkerService
  ) { }
  werker = {};
  view = 'home';
  ngOnInit() {
    this.werker = this.werkerService.getWerkerById(0);
  }

  /** @method onNavClick
   * event listener passed to nav bar
   * reassigns view to given value
   * @todo establish possible values of view
   *
   * @param view - target view
   */
  onNavClick(view: string) {
    console.log(view);
    this.view = view;
  }
}
