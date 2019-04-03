import { Component, Injectable, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

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
  ) { }

  @Input() shifts: Array<any>;
  @Input() maker: any;
  @Output() NavClick = new EventEmitter<string>();

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
  }
}
