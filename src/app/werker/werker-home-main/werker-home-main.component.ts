import { Component, OnInit } from '@angular/core';
import { ShiftService } from '../../shift.service';

@Component({
  selector: 'app-werker-home-main',
  templateUrl: './werker-home-main.component.html',
  styleUrls: ['./werker-home-main.component.scss'],
})
export class WerkerHomeMainComponent implements OnInit {

  constructor(
    private shiftService: ShiftService
  ) { }
  shiftList: Array<any> = [];
  ngOnInit() {
    this.shiftList = this.shiftService.allShifts;
  }

}
