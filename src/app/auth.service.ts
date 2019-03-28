import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleAuthService } from 'ng-gapi';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from, of } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { Werker, Maker } from './types';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
// const serverUrl = 'http://35.185.77.220:4000';
const serverUrl = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private googleAuth: GoogleAuthService,
    private storage: Storage,
    private http: HttpClient,
    private googlePlus: GooglePlus,
    public platform: Platform
  ) {}
  public static STORAGE_KEY = 'accessToken';
  public static STORAGE_ID = 'idToken';
  public static USER = 'user';
  public user: Werker | Maker;
  _webClientId: String = '347712232584-9dv95ud3ilg9bk7vg8i0biqav62fh1q7.apps.googleusercontent.com';

  /**
   * handles pipeline of login functions
   * executes each function in sequence
   *
   * @param role - either 'werker' or 'maker'
   */
  public login(role: string): Observable<any> | any {
    return this.signIn()
      .pipe(
        concatMap(code => this.saveLogin(code, role)),
        concatMap(res => this.saveLocalToken(res)),
        concatMap(() => this.getRemoteUserInfo()),
        catchError(err => throwError(err))
      );
  }

  /**
   * uses GoogleAuthService to request permissions from user
   * defers to cordova GooglePlus on mobile devices
   */
  private signIn(): Observable<string> {
    if (this.platform.is('desktop')) {
      return this.googleAuth.getAuth()
        .pipe(
          concatMap(res => from(res.grantOfflineAccess({
            prompt: 'consent',
          }))),
          concatMap(obj => of(obj.code)),
          catchError(err => throwError(err))
          );
    }
    return from(this.googlePlus.login({
      scopes: [
        'profile',
        'email',
        'openid',
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/user.phonenumbers.read'
        ].join(' '),
        webClientId: this._webClientId,
        offline: true,
    })).pipe(
      concatMap(obj => of(obj.serverAuthCode))
    );
  }

  /**
   * sends access token to API server for verification and storage
   *
   * @param code - one-time code from google
   * @param role - either 'werker' or 'maker'
   * @return Observable containing a new JWT from the API server
   */
  private saveLogin(code: string, role: string): Observable<string> {
    console.log(code);
    return this.http.get(`${serverUrl}/login?code=${code}&type=${role}`, { responseType: 'text' })
      .pipe(catchError(err => throwError(err)));
  }

  private saveLocalToken(code: string): Observable<void> {
    return from(this.storage.set(AuthService.STORAGE_KEY, code));
  }

  public getRemoteUserInfo(): Observable<any> {
    return this.http.get(`${serverUrl}/user`)
      .pipe(
        tap(user => this.user = user)
      );
  }

  /**
   * gets access token from local storage
   * used by HTTP interceptor
   */
  public getAccessToken(): Observable<string> {
    return from(this.storage.get(AuthService.STORAGE_KEY))
      .pipe(catchError(err => throwError(err))
    );
  }

  /**
   * updates API server with new data on user
   *
   * @param values - object with new values for server
   */
  private updateServerUserInfo(user: Werker | Maker, values: Object): Observable<any> {
    return this.http.patch(`${serverUrl}/profile`, Object.assign(user, values), httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * @deprecated
   * gets a default user for demonstration purposes
   *
   * @param role - either 'werkers' or 'makers'
   */
  public getDefaultUser(role: string): Observable<any> {
    if (role === 'makers') {
      return this.http.get(`${serverUrl}/makers/2`);
    }
    return this.http.get(`${serverUrl}/werkers/5`);
  }

  /**
   * @deprecated
   * old login procedure
   *
   * @param role - either 'werker' or 'maker'
   */
  public lazyServerLogin(role: string): Observable<any> {
    if (role === 'maker') {
      return this.http.put(`${serverUrl}/makers`, this.user, httpOptions);
    }
    return this.http.put(`${serverUrl}/werkers`, this.user, httpOptions);
  }
}
