import { Component, OnInit, Injectable } from '@angular/core';
import { ShiftService } from 'src/app/shift.service';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-maker-create-shift',
  templateUrl: './maker-create-shift.component.html',
  styleUrls: ['./maker-create-shift.component.scss'],
})

export class MakerCreateShiftComponent implements OnInit {
  view = 'createShift';
  count: any = 2;
  constructor(
    public shiftService: ShiftService,
  ) { }

  
  ngOnInit() {}

  addPosition = () => {
    let input: any =
    `<p></p>
    <ion-label>Position ${this.count}:</ion-label>
    <ion-input [(ngModel)]="position${this.count}" name="position ${this.count}" placeholder="Enter a single position"></ion-input>
    <ion-input [(ngModel)]="quantity${this.count}" name="quantity${this.count}" placeholder="Quantity"></ion-input>
    <ion-input [(ngModel)]="paymentAmnt${this.count}" name="paymentAmnt${this.count}" placeholder="Payment Amount"></ion-input>
    <ion-input [(ngModel)]="paymentType${this.count}" name="paymentType${this.count}" placeholder="Payment Type"></ion-input>
    <p></p> `;

    $('.form').append(input);
    console.log($('.form').value);
    this.count = this.count + 1;
  }

  submit = (f: NgForm) => {
    console.log('submitting');
    this.view = 'search';
    console.log(f);
    this.shiftService.submitShift(f.value).subscribe(response => {
      console.log(response);
      }
    )
  }
}