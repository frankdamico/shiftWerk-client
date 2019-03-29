import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-maker-profile',
  templateUrl: './maker-profile.component.html',
  styleUrls: ['./maker-profile.component.scss'],
})
export class MakerProfileComponent implements OnInit {


  public name: string;
  public email: string;
  public phoneNumber: string;
  public bio: string;
  public url_photo: string;

  constructor(
    public toastController: ToastController
  ) { }
  @Input() maker: any;
  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Profile ${answer}...Thanks!`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  update(answer) {
    this.presentToast(answer);
  }

  ngOnInit() {
    console.log(this.maker);
  this.name = this.maker.name;
  this.email = this.maker.email;
  this.phoneNumber = this.maker.phone;
  this.bio = this.maker.bio;
  this.url_photo = this.maker.url_photo;
  }

}
