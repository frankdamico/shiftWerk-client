import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ShiftService } from 'src/app/shift.service'
import { MakerService } from 'src/app/maker.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-maker-search',
  templateUrl: './maker-search.component.html',
  styleUrls: ['./maker-search.component.scss'],
})


export class MakerSearchComponent implements OnInit {
  public phoneNumber:any = '123-123-1234'; 
  public positions:string[] = [];
  werkers: any;
  view = 'search';
  constructor(
    private makerService: MakerService,
    public toastController: ToastController
  ) { }

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

  invite(answer) {
    console.log(answer);
    this.presentToast(answer);
  }
  
  ngOnInit() {
  }

  searchFunc = (event) => {
    this.makerService.getWerkers(event).subscribe(werkers => {
      this.werkers = werkers;
    })
  }

  setWerkers = () => {

  }

  goToProfile = () => {
    console.log('wentToProfile');
  }
}
