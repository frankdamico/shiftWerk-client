import { Injectable } from '@angular/core';
import { makeBindingParser } from '@angular/compiler';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const serverUrl = 'http://35.185.77.220:4000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor(private http: HttpClient) { }
  /**
   * @todo make network request for makers from DB
   * @todo change type signature to Array<Maker>
   */

  /** @method getMakerById
   * gets Maker from database by id
   */

  private extractData(res: Response): Response | object {
    return res || {};
  }
  getWerkers(event): Observable < any > {
    let params = new HttpParams();
    console.log(event);
    params = params.append('value', event);
    return this.http.get(`${serverUrl}/werkers/search/${event}`, { params })
      .pipe(
        map(this.extractData),
        catchError(err => throwError(err))
      );
  }
  getMakerInfo(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/makers/${id}`, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }
  getApplications(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/makers/${id}/applications`)
      .pipe(catchError(err => throwError(err)));
  }
  getUpcomingFulfilledShifts(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/makers/${id}/fulfilled/upcoming`)
      .pipe(catchError(err => throwError(err)));
  }
  getUnfulfilledShifts(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/makers/${id}/unfulfilled`)
      .pipe(catchError(err => throwError(err)));
  }
  getHistory(id: number): Observable<any> {
    return this.http.get(`${serverUrl}/makers/${id}/fulfilled/history`)
      .pipe(catchError(err => throwError(err)));
  }
}

