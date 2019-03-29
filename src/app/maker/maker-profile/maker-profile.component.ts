import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { WerkerService } from 'src/app/werker.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


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
    public toastController: ToastController,
    public werkerService: WerkerService, // using werker service to send cloudinary photo
    private camera: Camera,               // need to refactor all the services later into one
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
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.werkerService.uploadPhoto(base64Image)
    }, (err) => {
      // Handle error
      console.log(err);
    })
      .then(({ url }) => {
        this.url_photo = url;
      })

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
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.werkerService.uploadPhoto(base64Image)
    }, (err) => {
      // Handle error
      console.log(err);
    })
      .then(({ url }) => {
        this.url_photo = url;
      })
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
