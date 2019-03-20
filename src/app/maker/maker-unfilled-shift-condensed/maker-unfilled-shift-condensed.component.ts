import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';

@Component({
  selector: 'app-maker-unfilled-shift-condensed',
  templateUrl: './maker-unfilled-shift-condensed.component.html',
  styleUrls: ['./maker-unfilled-shift-condensed.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MakerUnfilledShiftCondensedComponent implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService
  ) { }
  @Input() shift: object;

  ngOnInit() {
    this.shiftService.getAllShifts();
  }

}
