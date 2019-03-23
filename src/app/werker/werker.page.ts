import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';
import data from 'mockDataShift.json';

@Component({
  selector: 'app-werker',
  templateUrl: './werker.page.html',
  styleUrls: ['./werker.page.scss'],
})
export class WerkerPage implements OnInit {

  constructor(
    public werkerService: WerkerService,
    public shiftService: ShiftService,
    public loadingController: LoadingController
  ) { }
  view = 'home';
  werker: any;
  shifts: any;
  upcomingShifts: any;
  pastShifts: any;
  invitedShifts: any;
  /**
   * @method getShifts
   * subscribes to {@link shiftService#getAllShifts}
   */

  async getShifts() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.shiftService.getAllShifts()
      .subscribe(res => {
        console.log(res);
        // uncomment out later to get this to work with real data
        // this.shifts = res;
        this.shifts = data;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }

  // TODO NEED TO TEST
  async getInvitedShifts() {
    await this.shiftService.getInvitedShifts()
      .subscribe(res => {
        console.log(res);
        // uncomment out later to get this to work with real data
        // this.invitedShifts = res;
        this.invitedShifts = data;
      }, err => {
        console.error(err);
      });
  }

  // TODO NEED TO TEST
  async getUpcomingShifts() {
    await this.shiftService.getUpcomingShifts()
      .subscribe(res => {
        console.log(res);
        // uncomment out later to get this to work with real data
        // this.upcomingShifts = res;
        this.upcomingShifts = data;

      }, err => {
        console.error(err);
      });
  }

  // TODO NEED TO TEST
  async getPastShifts() {
    await this.shiftService.getPastShifts()
      .subscribe(res => {
        console.log(res);
        // uncomment out later to get this to work with real data
        // this.pastShifts = res;
        this.pastShifts = data.slice(-3);
        console.log(this.pastShifts, 'past')
      }, err => {
        console.error(err);
      });
  }
  /**
  * @method getWerker
  * subscribes to {@link werkerService#getWerkerInfo}
  */
  async getWerker() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.werkerService.getWerkerInfo()
      .subscribe(res => {
        console.log(res);
        this.werker = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    // double check do i still need this line since i built getWerker?
    this.werker = this.werkerService.getWerkerById(0);
    // this.getWerker();
    this.getShifts();

    // uncomment out later to get shifts for components
    this.getInvitedShifts();
    this.getPastShifts();
    this.getUpcomingShifts();
  }

  /** @method onNavClick
   * event listener passed to nav bar
   * reassigns view to given value
   * @todo establish possible values of view
   *
   * @param view - target view
   */
  onNavClick(view: string) {
    console.log(view);
    this.view = view;
  }
}
