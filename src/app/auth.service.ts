import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage
  ) {}

  login(): Promise<{}> {
    return this.googlePlus.login({
      'webClientId': '347712232584-9dv95ud3ilg9bk7vg8i0biqav62fh1q7.apps.googleusercontent.com',
      'offline': true,
    })
      .then((user) => {
        alert(JSON.stringify(user));
        return this.nativeStorage.setItem('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        });
      })
      .catch(err => console.error(err));
  }
  isLoggedIn(): Promise<Boolean> {
    return this.nativeStorage.getItem('google_user')
      .then((user) => {
        return !!user.name;
      })
      .catch((err) => false);
  }
}
