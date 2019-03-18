import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-werker-shift-expanded',
  templateUrl: './werker-shift-expanded.component.html',
  styleUrls: ['./werker-shift-expanded.component.scss'],
})
export class WerkerShiftExpandedComponent implements OnInit {

  constructor() { }
  @Input() shift: object;

  acceptOrDecline(answer) {
    console.log(answer);
  }
  ngOnInit() {
  }

}
