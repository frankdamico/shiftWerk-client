import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shift.service'
import { MatExpansionModule } from '@angular/material/expansion';
import data from 'mockDataShift.json';


@Component({
  selector: 'app-werker-search',
  templateUrl: './werker-search.component.html',
  styleUrls: ['./werker-search.component.scss'],
})
export class WerkerSearchComponent implements OnInit {

  shifts: any;


  constructor(
    private shiftService: ShiftService
  ) { }
  
  

  ngOnInit() {
    this.shiftService.getAllShifts().subscribe(shifts => {
      // this.shifts = shifts;
      this.shifts = data;
    });
  }
  expandItem(item) {

    // this.shifts.forEach(shift => {
    //   if (item.id === shift.id) {
    //     item.expanded = true;
    //   }
    // })

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

