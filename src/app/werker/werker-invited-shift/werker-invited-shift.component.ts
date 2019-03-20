import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-invited-shift',
  templateUrl: './werker-invited-shift.component.html',
  styleUrls: ['./werker-invited-shift.component.scss'],
})
export class WerkerInvitedShiftComponent implements OnInit {

  constructor() { }

  @Input()
  invitedShift: Array<any>;

  ngOnInit() {}

}
