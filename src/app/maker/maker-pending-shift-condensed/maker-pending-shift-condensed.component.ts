import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';

@Component({
  selector: 'app-maker-pending-shift-condensed',
  templateUrl: './maker-pending-shift-condensed.component.html',
  styleUrls: ['./maker-pending-shift-condensed.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MakerPendingShiftCondensedComponent implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService
  ) { }

  @Input() shift: object;

  ngOnInit() {
    this.shiftService.getAllShifts();
  }

}
