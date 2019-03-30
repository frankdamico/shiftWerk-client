import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserService } from 'src/app/user.service';

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

  @Input() maker: any;

  constructor(
    public userService: UserService,
    public toastController: ToastController,
    private camera: Camera,
  ) { }

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Profile ${answer}...Thanks!`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.userService.uploadPhoto(base64Image);
    }, (err) => {
      // Handle error
      console.log(err);
    })
      .then(({ url }) => {
        this.url_photo = url;
      })

  }

  callNum() {
    setTimeout(() => {
      window.open(`tel:${this.phoneNumber}`, '_system');
    }, 100);
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }

    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.userService.uploadPhoto(base64Image);
    }, (err) => {
      // Handle error
      console.log(err);
    })
      .then(({ url }) => {
        this.url_photo = url;
      })
  }


  saveSettings(answer) {
    const settings = {
      name: this.name,
      email: this.email,
      url_photo: this.url_photo,
      bio: this.bio,
      phone: this.phoneNumber
    };
    this.userService.updateProfileSettings(settings)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      });
    this.presentToast(answer);
    console.log(settings);
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
