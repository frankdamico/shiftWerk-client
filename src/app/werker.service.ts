import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { serverUrl, httpOptions } from './environment';
let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/daft-funk/image/upload';
let CLOUDINARY_UPLOAD_PRESET = 'mxfd1wnl';

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

  public getUpcomingShifts(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/werkers/${id}/shifts/upcoming`, httpOptions);
  }

  public getHistory(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/werkers/${id}/shifts/history`, httpOptions);
  }

  public getInvitations(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/werkers/${id}/invitations`, httpOptions);
  }

  public getAllAvailableShifts(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/werkers/${id}/shifts/available`, httpOptions);
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
