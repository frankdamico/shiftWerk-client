import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private nativeStorage: NativeStorage,
    private auth: AuthService,
  ) {}
  loginMessage = '';
  infoMessage = '';
  getInfo(): void {
    this.nativeStorage.getItem('google_user')
      .then(user => {
        this.infoMessage = user.name + ' ' + user.email + ' ' + user.picture;
      })
      .catch(err => this.infoMessage = err);
  }
}
