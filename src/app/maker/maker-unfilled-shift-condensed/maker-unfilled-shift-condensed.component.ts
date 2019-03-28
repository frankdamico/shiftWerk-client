import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from 'src/app/shift.service';
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
  count: number = 0;

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService,
    public toastController: ToastController
  ) { }

  @Input() shift: object;
  @Input() unfilled: Array<any>;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Sent ${answer} to Werkers`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  invite(i) {
    console.log(this.shift['id']);
    console.log(this.shift['positions'][i]['position']);
    this.makerService.getWerkers(this.shift['positions'][i]['position'])
      .subscribe(response => {
        console.log(response);
      });
  }

  getUnfilled() {
    for(let i = 0; i < this.shift['positions'].length;i++) {
      if (this.shift['positions'][i]['filled'] === false) {
        return this.count + 1;
      }
    }
  }

  ngOnInit() {
    this.shiftService.getAllShifts();
    this.getUnfilled();
  }

}
