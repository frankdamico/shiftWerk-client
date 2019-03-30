import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { forkJoin } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-werker',
  templateUrl: './werker.page.html',
  styleUrls: ['./werker.page.scss'],
})
export class WerkerPage implements OnInit {

  constructor(
    public userService: UserService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public authService: AuthService,
  ) { }
  view = 'home';
  werker: any;
  shifts: any;
  upcomingShifts: any;
  pastShifts: any;
  invitedShifts: any;

  respondToInvitation({ shiftId, status }) {
    this.loadingController.create()
      .then(loading => {
        loading.present();
        this.userService.respondToInvitation(shiftId, status)
          .subscribe(() => {
            loading.dismiss();
            this.invitedShifts = this.invitedShifts.filter(shift => shift.id !== shiftId);
            console.log(this.invitedShifts);
            this.toastController.create({
              message: status === 'decline' ? 'Shift declined' : 'Shift accepted',
              duration: 2000,
              color: 'primary',
              position: 'top',
            }).then(toast => toast.present());
          });
      })
      .catch(err => console.error(err));
  }

  getWerkerShifts() {
    this.loadingController.create()
    .then(loading => {
      loading.present();
      console.log(this.werker);
      forkJoin(
        this.userService.getShifts('available'),
        this.userService.getShifts('upcoming'),
        this.userService.getShifts('invite'),
        this.userService.getShifts('history')
      ).subscribe(([available, upcoming, invited, history]) => {
          this.shifts = available;
          this.upcomingShifts = upcoming;
          this.invitedShifts = invited;
          this.pastShifts = history;
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
        this.werker = user;
        this.getWerkerShifts();
      }, err => console.error(err));
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
    if (this.view === 'home') {
      this.getWerkerShifts();
    }
  }
}
