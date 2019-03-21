import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shift.service'

@Component({
  selector: 'app-werker-search',
  templateUrl: './werker-search.component.html',
  styleUrls: ['./werker-search.component.scss'],
})
export class WerkerSearchComponent implements OnInit {

  constructor(
    private shiftService: ShiftService,
  ) { }

  shifts: any;
  view = 'search'
  ngOnInit() {
    this.shiftService.getAllShifts().subscribe(shifts => {
      this.shifts = shifts;
    });
  }

  searchFunc = (event) => {
    this.shiftService.getShiftsByTerm(event).subscribe(shifts => {
      this.shifts = shifts;
    })
  }

  goToShift = () => {
    console.log('wentToShift');
  }
}

