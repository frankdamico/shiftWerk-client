import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-maker-profile',
  templateUrl: './maker-profile.component.html',
  styleUrls: ['./maker-profile.component.scss'],
})
export class MakerProfileComponent implements OnInit {

  constructor(
    public toastController: ToastController

  ) { }

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Profile ${answer}...Thanks!`,
      duration: 2000,
      color: "primary",
      position: "top"
    });
    toast.present();
  }

  update(answer) {
    this.presentToast(answer);
  }

  ngOnInit() {}

}
