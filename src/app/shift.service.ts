import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { serverUrl, httpOptions } from './environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * @method extractData
   * returns either response or empty array in case of no response
   */
  private extractData(res: Response): Response | object {
    return res || [];
  }

  /**
   * @deprecated
   * @method getAllShifts
   * gets shifts from server, returning observable
   */
  getAllShifts(): Observable<any> {
    // might need to refactor to this endpoint later
    // GET /werkers/:werkerId/shifts/all
    return this.http.get(`${serverUrl}/shifts`, httpOptions).pipe(
      map(this.extractData),
      catchError(err => throwError(err))
    );
  }

  /**
   * sends a query with specific search terms
   */
  getShiftsByTerm(terms: {
    position: string,
    payment_amnt: number,
    payment_type: string
  }): Observable<any> {
    let params = new HttpParams();
    Object.entries(terms).forEach(([term, value]) => params = params.append(term, value));
    return this.http.get(`${serverUrl}/shifts`, { params })
      .pipe(
        map(this.extractData),
        catchError(err => throwError(err))
      );
  }
  /**
   * creates a new shift
   *
   * @param shiftBody the proper information needed to create the shift
   */
  submitShift(formData: {
    name: string,
    address: string,
    start: Date,
    end: Date,
    description: string,
    positions: object[],
  }, makerId): Observable<any> {

    const submittedShift = Object.assign(formData, { MakerId: makerId });

    return this.http.put(`${serverUrl}/shifts`, JSON.stringify(submittedShift), httpOptions).pipe(
      catchError(error => throwError(error))
    );
  }

  /**
   * either accepts or declines an application or invitation
   *
   * @param acceptOrDecline - either 'accept' or 'decline'
   */
  public respondToInvitation(werkerId: number, shiftId: number, acceptOrDecline: string): Observable<any> {
    return this.http.patch(`${serverUrl}/shifts/${shiftId}/application/${werkerId}/${acceptOrDecline}`, {}, httpOptions);
  }

  /**
   * either invites a werker to a shift or makes a new application for a shift
   *
   * @param type - either 'apply' or 'invite'
   */
  public inviteOrApply(shiftId: number, type: string, werkerId: number, positionName: string): Observable<any> {
    return this.http.put(`${serverUrl}/shifts/${shiftId}/${type}/${werkerId}/${positionName}`, httpOptions)
    .pipe(catchError(error => throwError(error)));
  }
}
