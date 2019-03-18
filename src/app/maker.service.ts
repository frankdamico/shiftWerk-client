import { Injectable } from '@angular/core';
import data from 'mockDataMaker.json';
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
export class MakerService {

  constructor(private http: HttpClient) { }
  /**
   * @todo make network request for makers from DB
   * @todo change type signature to Array<Maker>
   */
  allMakers: Array<any> = data;

  /** @method getMakerById
   * gets maker from present data by id
   * @todo make network request
   * @todo return Promise<Maker>
   *
   * @param id - db-generated id
   */
  private extractData(res: Response): Response | object {
    return res || {};
  }
  // private getMakerById(res: Response): Response | object {
  //   return res || {};
  // }
  getMakerById(id: Number): Object {
    return this.allMakers.find(maker => maker.id === id);
  }
  getMakerInfo(): Observable<any> {
    return this.http.get(`${serverUrl}/profile`, httpOptions)
      .pipe(catchError(err => throwError(err)));
  }
}

