import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maker-unfilled-shifts',
  templateUrl: './maker-unfilled-shifts.component.html',
  styleUrls: ['./maker-unfilled-shifts.component.scss'],
})
export class MakerUnfilledShiftsComponent implements OnInit {

  constructor() { }
  @Input() shifts: Array<any>;

  ngOnInit() {}

}
