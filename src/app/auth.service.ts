import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subscription, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  public signIn(role: string): Observable<any> {
    return this.googleAuth.getAuth()
      .pipe(
        map(res => res.signIn().then(res => this.signInSuccess(res, role))),
        catchError(err => throwError(err)));
  }

  public signInSuccess(res, role: string): Observable<any> {
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
    return forkJoin(
      this.storage.set(
        AuthService.STORAGE_KEY, token.access_token
      ),
      this.storage.set(
        AuthService.STORAGE_ID, token.id_token
      ),
      this.storage.set(
        AuthService.USER, this.user
      )
    ).pipe(catchError(err => throwError(err)));
  }

  public saveLogin(role: string): Observable<any> {
    const endpoint = role === 'werker' ? 'werkers' : 'makers';
    return this.http.put(`${serverUrl}/${endpoint}`, this.user, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  public getLocalUserInfo(): Promise<Werker | Maker> {
    return this.storage.get('USER');
  }

  public getToken(): Promise<string> {
    return this.storage.get(AuthService.STORAGE_KEY);
  }

  public getServerUserInfo(localUser: Werker | Maker): Observable<any> {
    const endpoint =  localUser.type === 'werker' ? 'werkers' : 'makers';
    return this.http.get(`${serverUrl}/${endpoint}/${localUser.id}`, httpOptions)
    .pipe(catchError(err => throwError(err)));
  }

  public async updateLocalUserInfo(values: Object): Promise<Werker | Maker> {
    const user = await this.storage.get('USER');
    this.user = user;
    return this.storage.set(
      AuthService.USER, Object.assign(user, values)
      );
  }

  public updateServerUserInfo(user: Werker | Maker, values: Object): Observable<any> {
    return this.http.patch(`${serverUrl}/settings`, Object.assign(user, values), httpOptions)
      .pipe(catchError(err => throwError(err)));
  }


  // public signIn(role: string): void {
  //   console.log('hi');
  //   this.googleAuth.getAuth()
  //   .subscribe((auth) => {
  //     auth.signIn().then(res => this.signInSuccess(res, role)).catch(err => console.error(err));
  //   });
  // }

  // private signInSuccess(res, role: string): Subscription {
  //   const token = res.getAuthResponse();
  //   if (role === 'maker') {
  //     this.user = {
  //       type: 'Maker',
  //       name: res.w3.ig,
  //       email: res.w3.U3,
  //       url_photo: res.w3.Paa,
  //     };
  //   } else {
  //     this.user = {
  //       type: 'Werker',
  //       name_first: res.w3.ofa,
  //       name_last: res.w3.wea,
  //       email: res.w3.U3,
  //       url_photo: res.w3.Paa,
  //       bio: '',
  //       certifications: [],
  //       positions: [],
  //       shifts: []
  //     };
  //   }
  //   console.log(res);
    // return forkJoin(
  //     this.storage.set(
  //       AuthService.STORAGE_KEY, res.getAuthResponse().access_token,
  //     ), this.storage.set(
  //       AuthService.STORAGE_ID, res.getAuthResponse().id_token,
  //     ), this.storage.set(
  //       AuthService.USER, this.user
  //     ))
  //     .subscribe(() => this.saveLogin(role));
  //     // .catch(err => console.error(err));
  //     }

  // public saveLogin(role: string): Subscription {
  //   const endpoint = role === 'werker' ? 'werkers' : 'makers';
  //   return this.http.put(`${serverUrl}/${endpoint}`, this.user, httpOptions)
  //   .pipe(catchError(err => throwError(err)))
  //   .subscribe(res => {
  //     console.log(res);
  //     this.updateLocalUserInfo(res);
  //   });
  // }

  public isLoggedIn(): Promise<boolean> {
    return this.storage.get('STORAGE_ID')
      .then(token => !!token);
  }

  public setUserInfo(role: string): Observable<any> {
    return role === 'werker'
      ? this.http.get(`${serverUrl}/werkers/1`)
      : this.http.get(`${serverUrl}/makers/1`);
  }

  public getDefaultUser(role: string): Observable<any> {
    return this.http.get(`${serverUrl}/${role}/1`)
      .pipe(catchError(err => throwError(err)));
  }
}
