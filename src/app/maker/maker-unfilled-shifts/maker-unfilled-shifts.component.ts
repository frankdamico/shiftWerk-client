import { Component, Injectable, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
  @Input() maker: any;
  @Output() NavClick = new EventEmitter<string>();  
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

  onNavClick(view: string) {
    this.NavClick.emit(view);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
    console.log(this.maker)
    // this.shiftService.getUpcomingShifts();
    this.makerService.getUnfulfilledShifts(this.maker.id);
  }

}
