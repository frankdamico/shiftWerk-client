import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-werker-home',
  templateUrl: './werker-home.component.html',
  styleUrls: ['./werker-home.component.scss'],
})
export class WerkerHomeComponent implements OnInit {

  constructor(
  ) { }
  @Output() respondToInvitation = new EventEmitter<object>();
  @Input()
  shifts: Array<any>;
  @Input()
  upcomingShifts: Array<any>;
  @Input()
  invitedShifts: Array<any>;

  onRespond({shiftId, status}) {
    this.respondToInvitation.emit({shiftId, status});
  }
  ngOnInit() {
  }
}
