import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-invited-shifts',
  templateUrl: './werker-invited-shifts.component.html',
  styleUrls: ['./werker-invited-shifts.component.scss'],
})
export class WerkerInvitedShiftsComponent implements OnInit {

  constructor() { }

  @Input()
  invitedShifts: Array<any>;
  ngOnInit() {}

}
