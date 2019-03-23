import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-upcoming-shifts',
  templateUrl: './werker-upcoming-shifts.component.html',
  styleUrls: ['./werker-upcoming-shifts.component.scss'],
})
export class WerkerUpcomingShiftsComponent implements OnInit {

  constructor() { }

  @Input()
  upcomingShifts: Array<any>;
  ngOnInit() {}

}
