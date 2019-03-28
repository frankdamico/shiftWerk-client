import { Component, OnInit } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { forkJoin, from } from 'rxjs';
import { map, tap, concatMap, flatMap } from 'rxjs/operators';
import { loadInternal } from '@angular/core/src/render3/util';

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

  respondToApplication({werkerId, shiftId, status}) {
    return from(this.loadingController.create())
      .pipe(
        flatMap(loading => loading.present()),
        map(() => this.shiftService.respondToInvitation(werkerId, shiftId, status))
      ).subscribe(() => {
        this.loadingController.dismiss();
        this.applications = this.applications.filter(app => app.shiftId !== shiftId);
      });
  }

  getMakerShifts() {
    this.loadingController.create()
      .then(loading => {
        loading.present();
        this.maker = this.authService.user;
        console.log(this.maker);
        forkJoin(
              this.makerService.getApplications(this.maker.id),
              this.makerService.getHistory(this.maker.id),
              this.makerService.getUnfulfilledShifts(this.maker.id),
              this.makerService.getUpcomingFulfilledShifts(this.maker.id),
          ).subscribe(([applications, history, unfulfilled, fulfilled]) => {
            console.log(applications, history, unfulfilled, fulfilled);
            this.applications = applications;
            this.history = history;
            this.unfulfilled = unfulfilled;
            this.upcomingFulfilled = fulfilled;
            this.view = 'home';
            loading.dismiss();
          }, err => {
            console.error(err);
            loading.dismiss();
          });
      });
  }

  ngOnInit() {
    this.getMakerShifts();
  }
  onNavClick(view: string) {
    console.log(view);
    this.view = view;
  }
}
