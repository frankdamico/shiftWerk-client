import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';

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
  werker: any;
  shifts: any;
  view = 'home';
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
        this.shifts = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
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
        // am i suppose to assign res to this.werker?
        this.werker = res;
        loading.dismiss();
      }, err => {
        console.error(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.werker = this.werkerService.getWerkerById(0); // double check do i still need this line since i built getWerker?
    // this.getWerker();
    this.getShifts();
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
