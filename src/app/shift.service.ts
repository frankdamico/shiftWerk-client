import { Injectable } from '@angular/core';
import data from 'mockDataShift.json';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
const serverUrl = 'http://35.185.77.220:4000';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(
    private http: HttpClient
  ) { }
  /**
   * @deprecated
   */
  allShifts: Array<any> = data;
  /**
   * @method extractData
   * returns either response or empty object in case of no response
   */
  private extractData(res: Response): Response | object {
    return res || {};
  }
  /**
   * @method getAllShifts
   * gets shifts from server, returning observable
   */
  getAllShifts(): Observable<any> {
    // might need to refactor to this endpoint later
    //GET /werkers/:werkerId/shifts/all
    return this.http.get(`${serverUrl}/shifts`, httpOptions).pipe(
      map(this.extractData),
      catchError(err => throwError(err))
    );
  }

  // TODO TEST TO MAKE SURE IT WORKS
  getUpcomingShifts(): Observable<any> {
    // /werkers/:werkerId/shifts/upcoming
    return this.http.get(`${serverUrl}/shifts`).pipe(
      map(this.extractData),
      catchError(err => throwError(err))
    )
  }
  // TODO TEST TO MAKE SURE IT WORKS
  getPastShifts(): Observable<any> {
    //werkers/:werkerId/shifts/past
    return this.http.get(`${serverUrl}/shifts`).pipe(
      map(this.extractData),
      catchError(err => throwError(err))
    )
  }
  // TODO TEST TO MAKE SURE IT WORKS
  getInvitedShifts(): Observable<any> {
    // /werkers/:werkerId/shifts/invited
    return this.http.get(`${serverUrl}/shifts`).pipe(
      map(this.extractData),
      catchError(err => throwError(err))
    )
  }
}
