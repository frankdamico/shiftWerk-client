import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';

@Component({
  selector: 'app-maker-history-shift-condensed',
  templateUrl: './maker-history-shift-condensed.component.html',
  styleUrls: ['./maker-history-shift-condensed.component.scss'],
})
@Injectable({
  providedIn: 'root'
})

export class MakerHistoryShiftCondensedComponent implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService
  ) { }

  @Input() shift: object;

  ngOnInit() {
    this.shiftService.getAllShifts();
  }

}
