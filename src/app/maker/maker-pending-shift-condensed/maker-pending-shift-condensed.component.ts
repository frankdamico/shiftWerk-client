import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-maker-pending-shift-condensed",
  templateUrl: "./maker-pending-shift-condensed.component.html",
  styleUrls: ["./maker-pending-shift-condensed.component.scss"]
})
@Injectable({
  providedIn: "root"
})
export class MakerPendingShiftCondensedComponent implements OnInit {
  count: number = 0;
  shifts: any;

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService,
    public toastController: ToastController
  ) {}

  @Input() shift: object;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Sent ${answer} to Werkers`,
      duration: 2000,
      color: "primary",
      position: "top"
    });
    toast.present();
  }

  update(answer) {
    console.log(answer);
    this.presentToast(answer);
  }

  getFilled() {
    for(let i = 0; i < this.shift['positions'].length; i++) {
      if(this.shift['positions'][i]['filled'] === true) {
        return this.count + 1
      }
    }
  }

  ngOnInit() {
    this.shiftService.getAllShifts();
    this.getFilled();
  }
}
