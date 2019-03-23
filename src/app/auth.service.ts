import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin, from } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Werker, Maker } from './types';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
const serverUrl = 'http://35.185.77.220:4000';

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
  public user: Werker | Maker;
  _webClientId: String = '347712232584-9dv95ud3ilg9bk7vg8i0biqav62fh1q7.apps.googleusercontent.com';

  public login(role: string): Observable<any> {
    return this.signIn(role)
      .pipe(
        concatMap(res => res.signIn()),
        concatMap(res => this.signInSuccess(res, role)),
        concatMap(() => this.getToken()),
        concatMap(token => this.saveLogin(token, role))
      );
  }

  private signIn(role: string): Observable<any> {
    return this.googleAuth.getAuth()
      .pipe(
        catchError(err => throwError(err)));
  }

  private signInSuccess(res, role: string): Observable<any> {
    alert(JSON.stringify(res));
    const token = res.getAuthResponse();
    if (role === 'maker') {
      this.user = {
        type: 'Maker',
        name: res.w3.ig,
        email: res.w3.U3,
        url_photo: res.w3.Paa,
      };
    } else {
      this.user = {
        type: 'Werker',
        name_first: res.w3.ofa,
        name_last: res.w3.wea,
        email: res.w3.U3,
        url_photo: res.w3.Paa,
        bio: '',
        certifications: [],
        positions: [],
        shifts: []
      };
    }
    alert(JSON.stringify(this.user));
    return from(Promise.all([
      this.storage.set(
        AuthService.STORAGE_KEY, token.access_token
      ),
      this.storage.set(
        AuthService.STORAGE_ID, token.id_token
      ),
      this.storage.set(
        AuthService.USER, this.user
      )
    ])
    ).pipe(catchError(err => throwError(err)));
  }

  private saveLogin(token: string, role: string): Observable<any> {
    console.log(token);
    const endpoint = role === 'werker' ? 'werkers' : 'makers';
    return this.http.put(`${serverUrl}/${endpoint}`, token, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  private getLocalUserInfo(): Observable<Werker | Maker> {
    return from(this.storage.get('USER'))
      .pipe(catchError(err => throwError(err)));
  }

  private getToken(): Observable<string> {
    return from(this.storage.get(AuthService.STORAGE_KEY));
  }

  private verifyUser(token: string): Observable<any> {
    return this.http.put('/login', token, httpOptions);
  }

  private updateLocalUserInfo(values: Object): Observable<any> {
    return from(this.storage.set(
      AuthService.USER, Object.assign(this.user, values)
      ));
  }

  private updateServerUserInfo(user: Werker | Maker, values: Object): Observable<any> {
    return this.http.patch(`${serverUrl}/settings`, Object.assign(user, values), httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  public getDefaultUser(role: string): Observable<any> {
    return this.http.get(`${serverUrl}/${role}/1`)
      .pipe(catchError(err => throwError(err)));
  }
}
