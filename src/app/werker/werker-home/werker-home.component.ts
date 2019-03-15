import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../../shift.service';

@Component({
  selector: 'app-werker-home',
  templateUrl: './werker-home.component.html',
  styleUrls: ['./werker-home.component.scss'],
})
export class WerkerHomeComponent implements OnInit {

  constructor(
    private shiftService: ShiftService
  ) { }
  shiftList: Array<any> = [];
  ngOnInit() {
    this.shiftList = this.shiftService.allShifts;
  }

}
