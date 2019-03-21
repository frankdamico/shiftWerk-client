import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-history',
  templateUrl: './werker-history.component.html',
  styleUrls: ['./werker-history.component.scss'],
})
export class WerkerHistoryComponent implements OnInit {

  @Input()
  pastShifts: Array<Object>;

  constructor() { }

  ngOnInit() {}

  rateShift(shift) {
    console.log(shift);
  }
}
