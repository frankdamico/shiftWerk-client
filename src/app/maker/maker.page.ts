import { Component, OnInit } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';

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
  searchRes: any;
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
          console.log(err);
          loading.dismiss();
        });
    }
  
  ngOnInit() {
    this.maker = this.makerService.getMakerById(0);
    this.getShifts();
  }

  onNavClick(view: string) {
    console.log(view);
    this.view = view;
  }
}
