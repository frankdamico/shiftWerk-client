import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';
import { Maker } from 'src/app/types';

@Component({
  selector: 'app-maker-unfilled-shift',
  templateUrl: './maker-unfilled-shift.component.html',
  styleUrls: ['./maker-unfilled-shift.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MakerUnfilledShiftComponent implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService
  ) { }
  @Input() shift: object;

  ngOnInit() {
    this.shiftService.getAllShifts();
  }

}
