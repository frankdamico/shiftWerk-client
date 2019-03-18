import { Injectable } from '@angular/core';
import data from 'mockDataMaker.json';
import { makeBindingParser } from '@angular/compiler';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const serverUrl = "http://35.185.77.220";

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor(
    private http: HttpClient,
  ) { }

  allMakers: Array<any> = data;
  werker: any;

  /** @method getMakerById
   * gets Maker from database by id
   */

  private extractData(res: Response): Response | object {
    return res || {};
  }

  getMakerById(id: Number): Object {
    return this.allMakers.find(maker => maker.id === id)
  }
  getWerkers(event): Observable < any > {
    let params = new HttpParams();
    params = params.append('value', event);
    return this.http.get(`${serverUrl}/shifts`, { params })
      .pipe(
        map(this.extractData),
        catchError(err => throwError(err))
      )
  }
}
