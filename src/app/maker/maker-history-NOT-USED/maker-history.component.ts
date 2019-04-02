import { Component, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-maker-history',
  templateUrl: './maker-history.component.html',
  styleUrls: ['./maker-history.component.scss'],
})
export class MakerHistoryComponent implements OnInit {

  constructor(
  ) { }
  @Input() shifts: Array<any>;
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
  }

}
