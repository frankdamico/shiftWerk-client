import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';
import { ShiftService } from '../shift.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { concatMap, tap } from 'rxjs/operators';
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
    public authService: AuthService,
  ) { }
  view = 'home';
  werker: any;
  shifts: any;
  upcomingShifts: any;
  pastShifts: any;
  invitedShifts: any;

  ngOnInit() {
    this.loadingController.create()
      .then(loading => {
        loading.present();
        this.authService.getDefaultUser('werkers')
          .pipe(
            tap(werker => this.werker = werker),
            concatMap(werker => forkJoin(
              this.werkerService.getAllAvailableShifts(werker.id),
              this.werkerService.getUpcomingShifts(werker.id),
              this.werkerService.getInvitations(werker.id),
              this.werkerService.getHistory(werker.id)
            ))
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
