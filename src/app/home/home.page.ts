import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private googlePlus: GooglePlus,
  ){}
  loginMessage = '';
  googleLogin() {
    this.googlePlus.login({}).then(res => {console.log(res); this.loginMessage = res}).catch(err => {console.error(err); this.loginMessage = err});
  }
}
