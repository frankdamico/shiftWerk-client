import { Component, OnInit, Injectable } from '@angular/core';
import { ShiftService } from 'src/app/shift.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-maker-create-shift',
  templateUrl: './maker-create-shift.component.html',
  styleUrls: ['./maker-create-shift.component.scss'],
})

export class MakerCreateShiftComponent implements OnInit {
  view = 'createShift';
  constructor(
    public shiftService: ShiftService,
  ) { }

  
  ngOnInit() {}

  addPosition = () => {
    
    console.log('adding position');
  }

  submit = (f: NgForm) => {
    console.log('submitting');
    this.view = 'search';
    console.log(f.value);
    this.shiftService.submitShift(f.value).subscribe(response => {
      }
    )
  }
}
