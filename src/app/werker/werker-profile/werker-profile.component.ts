import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { WerkerService } from 'src/app/werker.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-werker-profile',
  templateUrl: './werker-profile.component.html',
  styleUrls: ['./werker-profile.component.scss'],
})
export class WerkerProfileComponent implements OnInit {
  @Input() werker: any;


constructor(
  public toastController: ToastController,
  public werkerService: WerkerService,
  private camera: Camera
) {}

  // grabs input from HTML
  // if i need the value use this.nameFirst
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
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(base64Image);
    }, (err) => {
      // Handle error
      window.alert(err);
    });
  }
  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  uploadImage() {
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }


    // this.camera.getPicture(options).then((imageData) => {
    //   // imageData is either a base64 encoded string or a file URI
    //   // If it's base64 (DATA_URL):
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //   // Handle error
    // });

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
    this.werkerService.updateProfileSettings(this.werker.id, settings)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.error(err);
      });
    this.presentToast();
  }
  ngOnInit() {
    this.nameFirst = this.werker.name_first;
    this.nameLast = this.werker.name_last;
    this.email = this.werker.email;
    // need to figure out how to format input from 1231231234 to 123-123-1234
    this.phoneNumber = this.werker.phone;
    this.positions = this.werker.positions;
    this.availability = this.werker.last_minute;
    this.bio = this.werker.bio;
    this.url_photo = this.werker.url_photo;
    this.certifications = this.werker.certifications;
    this.address = this.werker.address;
  }
}
