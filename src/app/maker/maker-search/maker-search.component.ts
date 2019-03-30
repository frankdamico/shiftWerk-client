import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RatingComponent } from 'src/app/rating/rating.component';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-maker-search',
  templateUrl: './maker-search.component.html',
  styleUrls: ['./maker-search.component.scss'],
  providers: [RatingComponent]
})
export class MakerSearchComponent implements OnInit {
  public phoneNumber: any = '123-123-1234';
  public positions: string[] = [];
  werkers: any;
  view = 'search';
  constructor(
    private userService: UserService,
    public toastController: ToastController,
    private rating: RatingComponent,
  ) {}

  @Input() maker: any;
  @Input() results: any;
  @Input() shift: any;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Sent ${answer} to Werkers`,
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

  invite(i, j) {
    console.log(this.results[i]['positions'][j]['position'])
    const positionName = this.results[i]['positions'][j]['position'];
    const werkerId = this.results[i]['id'];
    const shiftId = this.shift['id'];
    this.presentToast('invite');
    this.userService.inviteOrApply(shiftId, positionName, werkerId).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
  }

  text = () => {
    console.log('texting');
  }
}
