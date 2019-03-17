import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-werker-profile',
  templateUrl: './werker-profile.component.html',
  styleUrls: ['./werker-profile.component.scss'],
})
export class WerkerProfileComponent implements OnInit {

  // grabs input from HTML
  // if i need the value use this.nameFirst
  public nameFirst:string;
  public nameLast:string;
  public email:string;
  public phoneNumber:number;
  public positions:string[] = [];
  public availability:boolean = false;
  public bio:string;

  constructor(
    public toastController: ToastController
  ) { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  lastMinAvail() {
    this.availability = !this.availability;
  }
  werkerPosition(position) {
    const index = this.positions.indexOf(position);
    index === -1 ? this.positions.push(position) : this.positions.splice(index, 1);
  }
  saveSettings() {
    console.log("I'm saving");
    this.presentToast();
  }
  ngOnInit() {}

}
