import { Component, Injectable, Input, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';

@Component({
  selector: 'app-maker-pending-shifts',
  templateUrl: './maker-pending-shifts.component.html',
  styleUrls: ['./maker-pending-shifts.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MakerPendingShiftsComponent implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService
  ) { }
  @Input() shifts: Array<any>;

  ngOnInit() {
  }

}
