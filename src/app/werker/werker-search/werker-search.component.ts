import { Component, OnInit, Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-werker-search',
  templateUrl: './werker-search.component.html',
  styleUrls: ['./werker-search.component.scss'],
})
export class WerkerSearchComponent implements OnInit {
  constructor(
    private userService: UserService,
    public loadingController: LoadingController
  ) { }
  @Input() werker;
  allShifts: Array<any>;
  shifts: Array<any>;
  position = '';
  payment_amnt = 0;
  payment_type = '';
  positions: Array<string>;
  paymentTypes: Array<string>;

  ngOnInit() {
    this.loadingController.create()
      .then(loading => {
        loading.present();
        this.userService.getShiftsByTerm({})
          .subscribe((shifts) => {
            loading.dismiss();
            console.log(shifts);
            this.shifts = shifts;
            this.allShifts = shifts;
            this.positions = shifts.map(shift => shift.position).filter((pos, i, positions) => positions.indexOf(pos) === i);
            this.paymentTypes = shifts.map(shift => shift.payment_type).filter((type, i, types) => types.indexOf(type) === i);
          }, err => {
            loading.dismiss();
            console.error(err);
          });
      });
  }

  filterShifts() {
    if ((!this.position || this.position === 'None') && (!this.payment_type || this.payment_type === 'None')) {
      this.shifts = this.allShifts;
    } else if (this.position === 'None' || !this.position) {
      this.shifts = this.allShifts.filter(shift => shift.payment_type === this.payment_type);
    } else if (this.payment_type === 'None' || !this.payment_type) {
      this.shifts = this.allShifts.filter(shift => shift.position === this.position);
    } else {
      this.shifts = this.allShifts.filter(shift => shift.position === this.position && shift.payment_type === this.payment_type);
    }
  }

  applyForShift(shift) {
    this.loadingController.create()
      .then(loading => {
        loading.present();
        this.userService.inviteOrApply(shift.id, shift.position)
          .subscribe(() => {
            loading.dismiss();
            console.log('applied');
            this.allShifts = this.allShifts.filter(oldShift => shift.id !== oldShift.id);
          }, err => {
            console.error(err);
            loading.dismiss();
          });
      });
  }

  goToShift = () => {
    console.log('wentToShift');
  }
}

