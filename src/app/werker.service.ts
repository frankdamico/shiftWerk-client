import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const serverUrl = 'http://35.185.77.220:4000';
@Injectable({
  providedIn: 'root'
})
export class WerkerService {

  constructor(private http: HttpClient) { }

  /** @method getWerkerById
   * gets Werker from db by id
   * currently reads mock data
   *
   * @param id - database-generated id
   * @return - Werker object
   *
   * @todo make network request for DB data
   * @todo return Promise<Werker>
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

  /**
 * @method extractData
 * returns either response or empty object in case of no response
 */
  private extractData(res: Response): Response | object {
    return res || {};
  }



  updateProfileSettings(profileSettings): Observable<any> {
    return this.http.patch(`${serverUrl}/settings`, profileSettings, httpOptions)
    .pipe(catchError(err => throwError(err)));
  }
}
