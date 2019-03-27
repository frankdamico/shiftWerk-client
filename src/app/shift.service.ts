import { Injectable } from '@angular/core';
import data from 'mockDataShift.json';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
const serverUrl = 'http://35.185.77.220:4000';
// const serverUrl = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(
    private http: HttpClient,
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
  getUpcomingShifts(werkerId, histOrUpcoming): Observable<any> {
    // /werkers/:werkerId/shifts/:histOrUpcoming
    return this.http.get(`${serverUrl}/werkers/${werkerId}/shifts/${histOrUpcoming}`).pipe(
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

  getInvitedShifts(werkerId): Observable<any> {
    return this.http.get(`${serverUrl}/werkers/${werkerId}/invitations`).pipe(
      map(this.extractData),
      catchError(err => throwError(err))
    );
  }
  /**
   * sends a query with specific search terms
   * @param event the search terms taken in by the search bar, returns an observable
   */
  getShiftsByTerm(event): Observable<any> {
    let params = new HttpParams();
    console.log(event);
    params = params.append('value', event);
    return this.http.get(`${serverUrl}/shifts/search/${event}`, { params })
      .pipe(
        map(this.extractData),
        catchError(err => throwError(err))
      );
  }
  /**
   * @function submitShift creates a new shift
   * @param {shiftBody} the proper information needed to create the shift
   */
  submitShift(formData, makerId): Observable<any> {

    const submittedShift = {
      MakerId: makerId,
      name: formData.name,
      description: formData.description,
      address: formData.address,
      start: formData.start,
      end: formData.end,
      positions: formData.positions,
    }

    return this.http.put(`${serverUrl}/shifts`, JSON.stringify(submittedShift), httpOptions).pipe(
      catchError(error => throwError(error))
    )
  }
}
