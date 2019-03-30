import { Component, Injectable, Input, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

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
  ) { }
  @Input() shifts: Array<any>;
  @Input() maker: any;

  ngOnInit() {
  }

}
