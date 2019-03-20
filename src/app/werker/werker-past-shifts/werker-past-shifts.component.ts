import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-past-shifts',
  templateUrl: './werker-past-shifts.component.html',
  styleUrls: ['./werker-past-shifts.component.scss'],
})
export class WerkerPastShiftsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input()
  pastShifts: Array<any>;
}
