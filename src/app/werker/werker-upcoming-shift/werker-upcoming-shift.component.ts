import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-werker-upcoming-shift',
  templateUrl: './werker-upcoming-shift.component.html',
  styleUrls: ['./werker-upcoming-shift.component.scss'],
})
export class WerkerUpcomingShiftComponent implements OnInit {

  constructor(
    public toastController: ToastController
  ) { }

  @Input()
  upcomingShift: Array<any>;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Invitation ${answer}`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  accept(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  decline(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  ngOnInit() {}

}
