import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';
import { ShiftService } from '../shift.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-werker',
  templateUrl: './werker.page.html',
  styleUrls: ['./werker.page.scss'],
})
export class WerkerPage implements OnInit {

  constructor(
    public werkerService: WerkerService,
    public shiftService: ShiftService,
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
        this.shiftService.respondToInvitation(this.werker.id, shiftId, status)
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
      this.werker = this.authService.user;
      console.log(this.werker);
      forkJoin(
        this.werkerService.getAllAvailableShifts(this.werker.id),
        this.werkerService.getUpcomingShifts(this.werker.id),
        this.werkerService.getInvitations(this.werker.id),
        this.werkerService.getHistory(this.werker.id)
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
    this.getWerkerShifts();
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
