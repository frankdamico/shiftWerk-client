import { Component, OnInit } from '@angular/core';
import { ShiftService } from 'src/app/shift.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-maker-create-shift',
  templateUrl: './maker-create-shift.component.html',
  styleUrls: ['./maker-create-shift.component.scss'],
})

export class MakerCreateShiftComponent implements OnInit {

  sForm: FormGroup;
  count: number = 0;
  position: FormGroup;
  view: any;

  constructor(
    private fb: FormBuilder,
    private shiftService: ShiftService) { 
  }

  ngOnInit() {
    this.sForm = new FormGroup({
      shiftName: new FormControl(),
      shiftAdd: new FormControl(),
      shiftStart: new FormControl(),
      shiftEnd: new FormControl(),
      shiftDesc: new FormControl(),
      positions: new FormArray([])
    });
  }

  get positions () {
    return this.sForm.get('positions') as FormArray;
  }

  addPosition() {
    this.position = new FormGroup({
      [`positionNeeded${this.count}`]: new FormControl(),
      [`quantity${this.count}`]: new FormControl(),
      [`paymentAmnt${this.count}`]: new FormControl(),
      [`paymentType${this.count}`]: new FormControl(),
    })
    this.positions.push(this.position);
    this.count++;
  }

  deletePosition(i) {
    this.positions.removeAt(i);
  }


  submit = () => {
    console.log('submitting');
    this.view = 'search';
    console.log(this.sForm.value);
    // this.shiftService.submitShift(f.value).subscribe(response => {
    //   console.log(response);
    //   }
    // )
  }
}