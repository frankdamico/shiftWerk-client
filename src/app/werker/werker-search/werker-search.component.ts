import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shift.service';
import { Shift } from 'src/app/types';


@Component({
  selector: 'app-werker-search',
  templateUrl: './werker-search.component.html',
  styleUrls: ['./werker-search.component.scss'],
})
export class WerkerSearchComponent implements OnInit {
  constructor(
    private shiftService: ShiftService,
  ) { }
  allShifts: Array<any>;
  shifts: Array<any>;
  position = '';
  payment_amnt = 0;
  payment_type = '';
  positions: Array<string>;
  paymentTypes: Array<string>;

  ngOnInit() {
    this.shiftService.getShiftsByTerm({})
      .subscribe((shifts) => {
        console.log(shifts);
        this.shifts = shifts;
        this.allShifts = shifts;
        this.positions = shifts.map(shift => shift.position).filter((pos, i, positions) => positions.indexOf(pos) === i);
        this.paymentTypes = shifts.map(shift => shift.payment_type).filter((type, i, types) => types.indexOf(type) === i);
        console.log(this.positions);
      });
  }

  filterShifts() {
    if ((!this.position || this.position === 'None') && (!this.payment_type || this.payment_type === 'None')) {
      this.shifts = this.allShifts;
    } else if (this.position === 'None' || !this.position) {
      this.shifts = this.allShifts.filter(shift => shift.payment_type === this.payment_type);
    } else if (this.payment_type === 'None' || !this.payment_type) {
      this.shifts = this.allShifts.filter(shift => shift.position === this.position);
    } else {
      this.shifts = this.allShifts.filter(shift => shift.position === this.position && shift.payment_type === this.payment_type);
    }
  }

  applyForShift(shift) {
    console.log(shift);
  }

  searchFunc = (event) => {
    this.shiftService.getShiftsByTerm(event).subscribe(shifts => {
      this.shifts = shifts;
    });
  }

  goToShift = () => {
    console.log('wentToShift');
  }
}

