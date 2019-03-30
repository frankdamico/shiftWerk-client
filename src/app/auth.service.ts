import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleAuthService } from 'ng-gapi';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from, of, forkJoin } from 'rxjs';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { Werker, Maker } from './types';
import { serverUrl, httpOptions } from './environment';

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
  public static USER_TYPE = 'userType';
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
        concatMap(([code, deviceType]) => this.saveLogin(code, role, deviceType)),
        concatMap(res => this.saveLocalTokenAndType(res, role)),
        catchError(err => throwError(err))
      );
  }

  /**
   * uses GoogleAuthService to request permissions from user
   * defers to cordova GooglePlus on mobile devices
   */
  private signIn(): Observable<string[]> {
    if (this.platform.is('mobile')) {
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
        concatMap(obj => of([obj.serverAuthCode, 'mobile'])),
        catchError(err => throwError(err))
      );
    }
  return this.googleAuth.getAuth()
    .pipe(
      concatMap(res => from(res.grantOfflineAccess({
       prompt: 'consent',
      }))),
      concatMap(obj => of([obj.code, 'desktop'])),
      catchError(err => throwError(err))
    );
  }

  /**
   * sends access token to API server for verification and storage
   *
   * @param code - one-time code from google
   * @param role - either 'werker' or 'maker'
   * @return Observable containing a new JWT from the API server
   */
  private saveLogin(code: string, role: string, deviceType: string): Observable<string> {
    return this.http.get(`${serverUrl}/login?code=${code}&type=${role}&device=${deviceType}`, { responseType: 'text' })
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }

  private saveLocalTokenAndType(code: string, role: string): Observable<any> {
    console.log(code);
    return forkJoin(from(this.storage.set(AuthService.USER_TYPE, role)), from(this.storage.set(AuthService.STORAGE_KEY, code)));
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

  public getUserType(): Observable<string> {
    return from(this.storage.get(AuthService.USER_TYPE))
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
}
