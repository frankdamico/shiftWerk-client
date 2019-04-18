import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-maker-history',
  templateUrl: './maker-history.component.html',
  styleUrls: ['./maker-history.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class MakerHistoryComponent implements OnInit {

  constructor(
    public toastController: ToastController
  ) { }
  @Input() shifts: Array<any>;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `No more ${answer}s to rate`,
      duration: 1000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  rate(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  ngOnInit() {
    console.log(this.shifts);
  }

}
