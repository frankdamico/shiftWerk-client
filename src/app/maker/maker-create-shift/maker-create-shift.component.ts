import { Component, OnInit, Input } from '@angular/core';
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

  @Input()
  maker:any;
  constructor(
    private fb: FormBuilder,
    private shiftService: ShiftService) { 
  }

  ngOnInit() {
    this.sForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl(),
      time_date: new FormControl(),
      duration: new FormControl(),
      // shiftEnd: new FormControl(),
      description: new FormControl(),
      positions: new FormArray([])
    });
  }

  get positions () {
    return this.sForm.get('positions') as FormArray;
  }

  addPosition() {
    this.position = new FormGroup({
      [`position${this.count}`]: new FormControl(),
      // [`quantity${this.count}`]: new FormControl(),
      [`payment_amnt${this.count}`]: new FormControl(),
      [`payment_type${this.count}`]: new FormControl(),
    })
    this.positions.push(this.position);
    this.count++;
  }

  deletePosition(i) {
    this.positions.removeAt(i);
  }


  submit = () => {
    console.log('submitting');
    console.log(this.sForm.value);
    this.shiftService.submitShift(this.sForm.value, this.maker.id).subscribe(response => {
      console.log(response);
      }
    )
  }
}