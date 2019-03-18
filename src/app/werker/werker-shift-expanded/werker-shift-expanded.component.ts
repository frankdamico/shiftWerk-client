import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-werker-shift-expanded',
  templateUrl: './werker-shift-expanded.component.html',
  styleUrls: ['./werker-shift-expanded.component.scss'],
})
export class WerkerShiftExpandedComponent implements OnInit {

  constructor(public toastController: ToastController) { }
  @Input() shift: object;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Invitation ${answer}`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  acceptOrDecline(answer) {
    console.log(answer);
    this.presentToast(answer);
  }
  ngOnInit() {
  }

}
