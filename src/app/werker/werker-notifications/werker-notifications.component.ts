import { Component, OnInit, Input } from '@angular/core';
import { ToastController }from '@ionic/angular';

@Component({
  selector: "app-werker-notifications",
  templateUrl: "./werker-notifications.component.html",
  styleUrls: ["./werker-notifications.component.scss"]
})
export class WerkerNotificationsComponent implements OnInit {
  
  constructor(public toastController: ToastController) {}
  @Input() shifts: object;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Invitation ${answer}`,
      duration: 2000,
      color: "primary",
      position: "top"
    });
    toast.present();
  }

  acceptOrDecline(answer) {
    console.log(answer);
    this.presentToast(answer);
  }
  ngOnInit() {}
}
