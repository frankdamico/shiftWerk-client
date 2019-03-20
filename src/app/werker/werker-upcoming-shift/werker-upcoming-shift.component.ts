import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-upcoming-shift',
  templateUrl: './werker-upcoming-shift.component.html',
  styleUrls: ['./werker-upcoming-shift.component.scss'],
})
export class WerkerUpcomingShiftComponent implements OnInit {

  constructor() { }

  @Input()
  upcomingShift: Array<any>;

  ngOnInit() {}

}
