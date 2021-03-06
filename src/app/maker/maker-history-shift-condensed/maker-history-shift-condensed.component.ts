import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
    public toastController: ToastController
  ) { }

  @Input() shift: object;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `No more ${answer}s to rate`,
      duration: 1000,
      color: "primary",
      position: "top"
    });
    toast.present();
  }

  rate(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  ngOnInit() {
  }

}
