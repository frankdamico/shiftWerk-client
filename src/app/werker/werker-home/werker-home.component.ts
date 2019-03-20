import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-home',
  templateUrl: './werker-home.component.html',
  styleUrls: ['./werker-home.component.scss'],
})
export class WerkerHomeComponent implements OnInit {

  constructor(
  ) { }
  @Input() 
  shifts: Array<any>;
  @Input()
  upcomingShifts: Array<any>;
  @Input()
  invitedShifts: Array<any>;
  ngOnInit() {
  }

}
