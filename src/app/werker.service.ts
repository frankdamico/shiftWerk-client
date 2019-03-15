import { Injectable } from '@angular/core';
import data from 'mockDataWerker.json';

@Injectable({
  providedIn: 'root'
})
export class WerkerService {

  constructor() { }
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
  getWerkerById(id: Number): Object {
    return this.allWerkers.find(werker => werker.id === id);
  }
}
