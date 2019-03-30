import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { serverUrl, httpOptions } from './environment';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/daft-funk/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'mxfd1wnl';

@Injectable({
  providedIn: 'root'
})
export class WerkerService {

  constructor(private http: HttpClient) { }

  /**
   * gets Werker from db by id
   *
   * @param id - database-generated id
   */
  public getWerkerById(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/werkers/${id}`, httpOptions);
  }

  /**
   * gets shifts for logged in user according to query string
   *
   * @param query "upcoming", "history", "apply", "invite", "available", "unfulfilled"
   */
  public getShifts(query: string): Observable<any> {
    return this.http.get(`${serverUrl}/users/shifts?shifts=${query}`, httpOptions);
  }

  /**
   * creates a new shift
   *
   * @param shiftBody the proper information needed to create the shift
   */
  public submitShift(formData: {
    name: string,
    address: string,
    start: Date,
    end: Date,
    description: string,
    positions: object[],
  }): Observable<any> {
    return this.http.put(`${serverUrl}/shifts`, JSON.stringify(formData), httpOptions).pipe(
      catchError(error => throwError(error))
    );
  }

  /**
   * either accepts or declines an application or invitation
   *
   * @param acceptOrDecline - either 'accept' or 'decline'
   */
  public respondToInvitation(shiftId: number, acceptOrDecline: string, werkerId?: number, ): Observable<any> {
    const werkerQuery = werkerId ? `&werker=${werkerId}` : '';
    return this.http.patch(
      `${serverUrl}/shifts/${shiftId}/applications?status=${acceptOrDecline}${werkerQuery}`,
      {}, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * either invites a werker to a shift or makes a new application for a shift
   *
   */
  public inviteOrApply(shiftId: number, positionName: string, werkerId?: number): Observable<any> {
    const werkerQuery = werkerId ? `&werker=${werkerId}` : '';
    return this.http.put(`${serverUrl}/shifts/${shiftId}/applications?position=${positionName}${werkerQuery}`, httpOptions)
    .pipe(catchError(error => throwError(error)));
  }

  uploadPhoto(photo): Promise<any> {
    return this.http.post(CLOUDINARY_URL, {
           file: photo,
           upload_preset: CLOUDINARY_UPLOAD_PRESET,
         }).toPromise();
  }

  updateProfileSettings(profileSettings: {
    name_first?: string,
    name_last?: string,
    email?: string,
    url_photo?: string,
    bio?: string,
    certifications?: object[],
    positions?: object[],
  }, werkerId: number): Observable<any> {
    return this.http.patch(`${serverUrl}/werkers/${werkerId}`, profileSettings, httpOptions)
    .pipe(catchError(err => throwError(err)));
  }
}
