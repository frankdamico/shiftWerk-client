import { Injectable } from '@angular/core';
import data from 'mockDataMaker.json';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor() { }
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
  getMakerById(id: Number) {
    return this.allMakers.find(maker => maker.id === id);
  }
}
