import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-werker-history',
  templateUrl: './werker-history.component.html',
  styleUrls: ['./werker-history.component.scss'],
})
export class WerkerHistoryComponent implements OnInit {

  @Input()
  pastShifts: Array<Object>;

  constructor(
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {}

  async presentActionSheet(shift) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Rate this shift!',
      buttons: [{
        text: '1 Star',
        // icon: 'star',
        handler: () => {
          this.submitRating(1, shift);
        }
      }, {
        text: '2 Stars',
        // icon: 'share',
        handler: () => {
          this.submitRating(2, shift);
        }
      }, {
        text: '3 Stars',
        // icon: 'arrow-dropright-circle',
        handler: () => {
          this.submitRating(3, shift);
        }
      }, {
        text: '4 Stars',
        // icon: 'heart',
        handler: () => {
          this.submitRating(4, shift);
        }
      }, {
        text: '5 Stars',
        // icon: 'heart',
        handler: () => {
          this.submitRating(5, shift);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your rating has been submitted.',
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  submitRating(rating, shift) {
    const index = this.pastShifts.indexOf(shift);
    this.pastShifts.splice(index, 1);
    console.log(rating, shift);
    this.presentToast();

    
  }
  rateShift(shift) {
    this.presentActionSheet(shift);
  }
}
