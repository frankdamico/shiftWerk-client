import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    private _webClientId: '347712232584-9dv95ud3ilg9bk7vg8i0biqav62fh1q7.apps.googleusercontent.com',
  ) {}

  _onSuccessfulLogin(user): Promise<{}> {
    return this.nativeStorage.setItem('google_user', {
      name: user.displayName,
      email: user.email,
      picture: user.imageUrl
    });
  }
  login(): Promise<void | {}> {
    console.log('trying login');
    return this.googlePlus.trySilentLogin({
      'webClientId': this._webClientId,
      'offline': true,
    })
      .then(this._onSuccessfulLogin)
      .catch(() => {
        return this.googlePlus.login({
          'webClientId': this._webClientId,
          'offline': true,
        });
      })
      .then(this._onSuccessfulLogin)
      .catch(err => alert(err));
  }
  isLoggedIn(): Promise<Boolean> {
    return this.nativeStorage.getItem('google_user')
      .then((user) => {
        return !!user.name;
      })
      .catch((err) => false);
  }
}
