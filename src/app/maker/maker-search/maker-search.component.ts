import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RatingComponent } from 'src/app/rating/rating.component';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';
import { Position, Maker, Werker, Shift } from 'src/app/types';

@Component({
  selector: 'app-maker-search',
  templateUrl: './maker-search.component.html',
  styleUrls: ['./maker-search.component.scss'],
  providers: [RatingComponent]
})
export class MakerSearchComponent implements OnInit {
  private phoneNumber: string = '123-123-1234';
  private werkers: Werker[] = [];

  constructor(
    private userService: UserService,
    public toastController: ToastController,
    private rating: RatingComponent,
    public loadingController: LoadingController,
  ) {}

  @Input() maker: Maker;
  @Input() position: Position;
  @Input() shift: Shift;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `${answer}`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }
  callNum() {
    setTimeout(() => {
      window.open(`tel:${this.phoneNumber}`, '_system');
    }, 100);
  }

  async invite(werker) {
    const loading = await this.loadingController.create();
    loading.present();
    this.userService.inviteOrApply(this.shift.id, this.position.position, werker.id).subscribe(() => {
      this.presentToast(`Invited ${werker.name_first} as ${this.position.position} to ${this.shift.name}`);
      loading.dismiss();
    }, (err) => {
      loading.dismiss();
      this.presentToast(`Invited ${werker.name_first} as ${this.position.position} to ${this.shift.name}`);
    });
  }

  ngOnInit() {
    this.userService.getWerkers(this.position.position).subscribe(werkers => this.werkers = werkers);
  }

  text = () => {
    console.log('texting');
  }
}
