import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GoogleAuthService } from 'ng-gapi';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Werker, Maker } from './types';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
const serverUrl = 'http://localhost:4001';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private googleAuth: GoogleAuthService,
    private storage: Storage,
    private http: HttpClient
  ) {}
  public static STORAGE_KEY = 'accessToken';
  public static STORAGE_ID = 'idToken';
  public static USER = 'user';
  private user: Werker | Maker;
  _webClientId: String = '347712232584-9dv95ud3ilg9bk7vg8i0biqav62fh1q7.apps.googleusercontent.com';

  public getToken(): Promise<string> {
    return this.storage.get(AuthService.STORAGE_KEY);
  }

  public signIn(role: string): void {
    console.log('hi');
    this.googleAuth.getAuth()
      .subscribe((auth) => {
        auth.signIn().then(res => this.signInSuccess(res, role)).catch(err => console.error(err));
      });
  }

  signInSuccess(res, role: string): Promise<any> {
    const token = res.getAuthResponse();
    if (role === 'Maker') {
      this.user = {
        type: 'Maker',
        name: res.w3.ig,
        email: res.w3.U3,
        URL_photo: res.w3.Paa,
      };
    } else {
      this.user = {
        type: 'Werker',
        name_first: res.w3.ofa,
        name_last: res.w3.wea,
        email: res.w3.U3,
        URL_photo: res.w3.Paa,
      };
    }
    console.log(res);
    return Promise.all([this.storage.set(
      AuthService.STORAGE_KEY, res.getAuthResponse().access_token,
    ), this.storage.set(
      AuthService.STORAGE_ID, res.getAuthResponse().id_token,
    ), this.storage.set(
      AuthService.USER, this.user
    )])
    .catch(err => console.error(err));
  }

  saveLogin(): Observable<any> {
    return this.http.put(`${serverUrl}/login`, this.user, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  getLocalUserInfo(): Promise<Werker | Maker> {
    return this.storage.get('USER');
  }

  getServerUserInfo(localUser: Werker | Maker): Observable<any> {
    const endpoint =  localUser.type === 'Werker' ? 'werkers' : 'makers';
    return this.http.get(`${serverUrl}/${endpoint}/${localUser.id}`, httpOptions)
    .pipe(catchError(err => throwError(err)));
  }

  updateLocalUserInfo(values: Object): Promise<Werker | Maker> {
    return this.storage.get('USER')
      .then((user) => {
        this.user = user;
        return this.storage.set(
          AuthService.USER, Object.assign(user, values)
        );
      });
  }

  updateServerUserInfo(user: Werker | Maker, values: Object): Observable<any> {
    return this.http.patch(`${serverUrl}/settings`, Object.assign(user, values), httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  public isLoggedIn(): Promise<boolean> {
    return this.storage.get('STORAGE_ID')
      .then(token => !!token);
  }

}
