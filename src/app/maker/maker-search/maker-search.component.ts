import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RatingComponent } from 'src/app/rating/rating.component'
import { MakerService } from 'src/app/maker.service';
import { ToastController } from '@ionic/angular';
import { ShiftService } from 'src/app/shift.service'

@Component({
  selector: "app-maker-search",
  templateUrl: "./maker-search.component.html",
  styleUrls: ["./maker-search.component.scss"],
  providers: [RatingComponent]
})
export class MakerSearchComponent implements OnInit {
  public phoneNumber: any = "123-123-1234";
  public positions: string[] = [];
  werkers: any;
  view = "search";
  constructor(
    private makerService: MakerService,
    public toastController: ToastController,
    private rating: RatingComponent,
    private shiftService: ShiftService,
  ) {}

  @Input() maker: any;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Sent ${answer} to Werkers`,
      duration: 2000,
      color: "primary",
      position: "top"
    });
    toast.present();
  }
  callNum() {
    setTimeout(() => {
      window.open(`tel:${this.phoneNumber}`, "_system");
    }, 100);
  }

  invite(i, j) {
    let positionName = this.werkers[i]['positions'][j];
    let werkerId = this.werkers[i]['id'];
    let type = 'invite'
    let shiftId;
    this.presentToast('invite');
    this.shiftService.inviteWerker(shiftId, type, werkerId, positionName).subscribe(response => {
      console.log(response);
    })
  }

  ngOnInit() {}

  searchFunc = event => {
    this.makerService.getWerkers(event).subscribe(werkers => {
      this.werkers = werkers;
    });
  };

  text = () => {
    console.log("texting");
  };
}
