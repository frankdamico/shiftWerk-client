import { Component, OnInit } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.page.html',
  styleUrls: ['./maker.page.scss'],
})
export class MakerPage implements OnInit {

  constructor(
    public makerService: MakerService,
    public shiftService: ShiftService,
    public authService: AuthService,
    public loadingController: LoadingController
  ) { }
  maker: any;
  shifts: [];
  applications: any;
  view: any;
  upcomingFulfilled: any;
  unfulfilled: any;
  history: any;

  async getShifts() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.shiftService.getAllShifts()
      .subscribe(res => {
        console.log(res);
        this.shifts = res; // uncomment to access live data
        // this.shifts = data; // mock data
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }
  async getMaker() {
    const loading = await this.loadingController.create();
    await loading.present();
    // makers id is 1
    await this.authService.getDefaultUser('makers', 1)
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

  async getApplications() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.makerService.getApplications(this.maker.id)
      .subscribe(res => {
        console.log(res);
        this.applications = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }

  async getUpcomingFulfilled() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.makerService.getUpcomingFulfilledShifts(this.maker.id)
      .subscribe(res => {
        console.log('fulfilled', res);
        this.upcomingFulfilled = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }

  async getUnfulfilled() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.makerService.getUnfulfilledShifts(this.maker.id)
      .subscribe(res => {
        console.log('unfulfilled', res);
        this.unfulfilled = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }

  async getHistory() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.makerService.getHistory(this.maker.id)
      .subscribe(res => {
        console.log('history', res);
        this.history = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getMaker()
      .then(() => this.getApplications())
      .then(() => this.getUpcomingFulfilled())
      .then(() => this.getUnfulfilled())
      .then(() => this.getHistory())
      .then(() => {
        console.log(this.maker);
      });
    this.view = 'home';
  }
  onNavClick(view: string) {
    console.log(view);
    this.view = view;
  }
}
