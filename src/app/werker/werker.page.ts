import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';
import { ShiftService } from '../shift.service';

@Component({
  selector: 'app-werker',
  templateUrl: './werker.page.html',
  styleUrls: ['./werker.page.scss'],
})
export class WerkerPage implements OnInit {

  constructor(
    private werkerService: WerkerService,
    private shiftService: ShiftService
  ) { }
  werker = {};
  shifts = [];
  view = 'home';
  ngOnInit() {
    this.werker = this.werkerService.getWerkerById(0);
    this.shifts = this.shiftService.allShifts;
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
