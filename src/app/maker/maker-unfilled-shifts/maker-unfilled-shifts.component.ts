import { Component, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';

@Component({
  selector: 'app-maker-unfilled-shifts',
  templateUrl: './maker-unfilled-shifts.component.html',
  styleUrls: ['./maker-unfilled-shifts.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MakerUnfilledShiftsComponent implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService
  ) { }

  @Input() shifts: Array<any>;
  // unfilled: Array<any>;
  // unfulfulled: Array<any>;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.shifts.length === 5) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
<<<<<<< HEAD
    this.shiftService.getUpcomingShifts('makers', 1);
=======
    // this.shiftService.getUpcomingShifts();
>>>>>>> 4847d5e532465580ff3eec9781695636e69f3e35
    // this.makerService.getUnfulfilledShifts();
  }

}
