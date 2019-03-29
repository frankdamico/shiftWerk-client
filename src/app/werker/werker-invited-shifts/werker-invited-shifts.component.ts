import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-werker-invited-shifts',
  templateUrl: './werker-invited-shifts.component.html',
  styleUrls: ['./werker-invited-shifts.component.scss'],
})
export class WerkerInvitedShiftsComponent implements OnInit {

  constructor() { }
  @Output() respondToInvitation = new EventEmitter<object>();
  @Input()
  invitedShifts: Array<any>;

  onRespond({shiftId, status}) {
    this.respondToInvitation.emit({shiftId, status});
  }
  ngOnInit() {}
}
