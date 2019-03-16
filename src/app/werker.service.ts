import { Injectable } from '@angular/core';
import data from 'mockDataWerker.json';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const serverUrl = "http://localhost:4001";
@Injectable({
  providedIn: 'root'
})
export class WerkerService {

  constructor(private http: HttpClient) { }
  // TODO make allWerkers Array<Werker>
  allWerkers: Array<any> = data;
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

  /**
 * @method extractData
 * returns either response or empty object in case of no response
 */
  private extractData(res: Response): Response | object {
    return res || {};
  }

  getWerkerById(id: Number): Object {
    return this.allWerkers.find(werker => werker.id === id);
  }

  getWerkerInfo(): Observable<any> {
    console.log('woof');
    return this.http.get(`${serverUrl}/profile`, httpOptions)
      .pipe(catchError(err => throwError(err)))
  }
}
