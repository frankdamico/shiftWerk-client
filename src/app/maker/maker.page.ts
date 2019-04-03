import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
    public userService: UserService,
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

  /**
   * responds to an application, marking it as either accepted or declined
   * removes application from state
   *
   * @param info.status - either 'accept' or 'decline'
   */
  respondToApplication(info: {werkerId, shiftId, status}) {
    const { werkerId, shiftId, status } = info;
    return from(this.loadingController.create())
      .pipe(
        flatMap(loading => loading.present()),
        map(() => this.userService.respondToInvitation(shiftId, status, werkerId))
      ).subscribe(() => {
        this.loadingController.dismiss();
        this.applications = this.applications.filter(app => app.shiftId !== shiftId);
      });
  }

  /**
   * populates local state with all applications, history,
   * unfulfilled shifts, and upcoming fulfilled shifts
   * for the logged in maker
   */
  getMakerShifts() {
    this.loadingController.create()
      .then(loading => {
        loading.present();
        forkJoin(
              this.userService.getShifts('apply'),
              this.userService.getShifts('history'),
              this.userService.getShifts('unfulfilled'),
              this.userService.getShifts('upcoming')
          ).subscribe(([applications, history, unfulfilled, fulfilled]) => {
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
    this.authService.getRemoteUserInfo()
      .subscribe(user => {
        this.maker = user;
        this.getMakerShifts();
      }, err => console.error(err));
  }

  /**
   * changes the component rendered in <ion-content>
   * if home is rendered, fetches all shifts again
   *
   * @param view - 'home', 'notifications', 'profile', 'history', 'schedule', 'search', or 'createShift'
   */
  onNavClick(view: string) {
    this.view = view;
    if (this.view === 'home') {
      this.getMakerShifts();
    }
  }
}
