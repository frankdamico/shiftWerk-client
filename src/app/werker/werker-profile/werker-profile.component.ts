import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-werker-profile',
  templateUrl: './werker-profile.component.html',
  styleUrls: ['./werker-profile.component.scss'],
})
export class WerkerProfileComponent implements OnInit {
  @Input() werker: any;

v
constructor(
  public toastController: ToastController,
  public userService: UserService,
  private camera: Camera,
) {}


  public nameFirst: string;
  public nameLast: string;
  public email: string;
  public phoneNumber: string;
  public positions: object[];
  public availability: boolean;
  public bio: string;
  public url_photo: string;
  public certifications: object[];
  public address: string;

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Profile UPDATED...Thanks!`,
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
        console.error(err);
    })
      .then(({url}) => {
        this.url_photo = url;
      });

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
      console.error(err);
    })
      .then(({url}) => {
        this.url_photo = url;
      });
  }

  callNum() {
    setTimeout(() => {
      window.open(`tel:${this.phoneNumber}`, '_system');
    }, 100);
  }
  lastMinAvail() {
    this.availability = !this.availability;
  }
  werkerPosition(position) {
    const index = this.positions.indexOf(position);
    index === -1 ? this.positions.push(position) : this.positions.splice(index, 1);
  }
  saveSettings() {
    const settings = {
      nameFirst: this.nameFirst,
      nameLast: this.nameLast,
      email: this.email,
      url_photo: this.url_photo,
      bio: this.bio,
      phoneNumber: this.phoneNumber,
      availability: this.availability,
      certifications: this.certifications,
      positions: this.positions,
    };
    this.userService.updateProfileSettings(settings)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      });
    this.presentToast();
  }
  ngOnInit() {
    console.log(this.werker);
    this.nameFirst = this.werker.name_first;
    this.nameLast = this.werker.name_last;
    this.email = this.werker.email;
    this.phoneNumber = this.werker.phone;
    this.positions = this.werker.positions;
    this.availability = this.werker.last_minute;
    this.bio = this.werker.bio;
    this.url_photo = this.werker.url_photo;
    this.certifications = this.werker.certifications;
    this.address = this.werker.address;
  }
}
