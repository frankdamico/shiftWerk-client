import { Component, OnInit } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';
import data from 'mockDataShift.json';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.page.html',
  styleUrls: ['./maker.page.scss'],
})
export class MakerPage implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService,
    public loadingController: LoadingController
  ) { }
  maker: any;
  shifts: any;
  view: any;

  async getShifts() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.shiftService.getAllShifts()
      .subscribe(res => {
        console.log(res);
        // this.shifts = res; // uncomment to access live data
        this.shifts = data; // mock data
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }
  async getMaker() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.makerService.getMakerInfo()
      .subscribe(res => {
        console.log('MEOW');
        console.log(res);
        this.maker = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.maker = this.makerService.getMakerById(0);
    console.log(this.maker);
    this.getShifts();
    this.view = 'home';
  }
  onNavClick(view: string) {
    console.log(view);
    this.view = view;
  }
}
