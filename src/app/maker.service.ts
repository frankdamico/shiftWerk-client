import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { serverUrl, httpOptions } from './environment';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response): Response | object {
    return res || {};
  }

  /**
   * gets every werker eligible for a position
   *
   * @param position - the name of the position being searched for
   */
  getWerkers(position: string): Observable <object> {
    return this.http.get(`${serverUrl}/werkers/search/${position}`)
      .pipe(
        map(this.extractData),
        catchError(err => throwError(err))
      );
  }

  /**
   * gets profile of maker by ID
   */
  getMakerInfo(id: number): Observable<Object> {
    return this.http.get(`${serverUrl}/makers/${id}`, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * gets all applications for a maker's shifts
   *
   * @param id - maker ID
   */
  getApplications(id: number): Observable<Object> {
    return this.http.get(`${serverUrl}/makers/${id}/applications`)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * gets all future fulfilled shifts for a maker
   */
  getUpcomingFulfilledShifts(id: number): Observable<Object> {
    return this.http.get(`${serverUrl}/makers/${id}/fulfilled/upcoming`)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * gets all unfilled shifts for a maker
   */
  getUnfulfilledShifts(id: number): Observable<Object> {
    return this.http.get(`${serverUrl}/makers/${id}/unfulfilled`)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * gets all past shifts for a maker
   */
  getHistory(id: number): Observable<Object> {
    return this.http.get(`${serverUrl}/makers/${id}/fulfilled/history`)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * creates a new "favorites" entry for given maker to a given werker
   *
   * @param id.type - either 'werker' for werker's favorite maker, or 'maker' for vice-versa
   */
  fav(id: {makerId: number, werkerId: number, type: string}): Observable<Object> {
    return this.http.put(`${serverUrl}/favorites`, id)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * @todo make it work with no body -- requires server adjustment
   * deletes "favorites" entry for given maker to a given werker
   *
   * @param id.type - either 'werker' for werker's favorite maker, or 'maker' for vice-versa
   */
  unFav(id: {makerId: number, werkerId: number, type: string}): Observable<Object> {
    return this.http.delete(`${serverUrl}/favorites`, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }

  /**
   * updates a maker's profile in DB
   */
  updateProfileSettings(profileSettings: {
    name?: string,
    bio?: string,
    number?: string,
    email?: string,
    url_photo?: string
  }, makerId): Observable<any> {
    return this.http.patch(`${serverUrl}/maker/${makerId}`, profileSettings, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }
}

