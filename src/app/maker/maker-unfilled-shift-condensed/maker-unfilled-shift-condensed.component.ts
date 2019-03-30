import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-maker-unfilled-shift-condensed',
  templateUrl: './maker-unfilled-shift-condensed.component.html',
  styleUrls: ['./maker-unfilled-shift-condensed.component.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class MakerUnfilledShiftCondensedComponent implements OnInit {
  shifts: any;
  count = 0;

  constructor(
    public toastController: ToastController
  ) { }

  @Input() shift: object;
  @Input() unfilled: Array<any>;
  @Output() NavClick = new EventEmitter<string>();

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Sent ${answer} to Werkers`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  getUnfilled() {
    for(let i = 0; i < this.shift['positions'].length;i++) {
      if (this.shift['positions'][i]['filled'] === false) {
        return this.count + 1;
      }
    }
  }

  ngOnInit() {
  }
}