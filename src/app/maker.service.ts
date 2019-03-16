import { Injectable } from '@angular/core';
import data from 'mockDataMaker.json';
import { makeBindingParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor() { }

  allMakers: Array<any> = data;
  
  /** @method getMakerById
   * gets Maker from database by id
   */
  getMakerById(id: Number): Object {
    return this.allMakers.find(maker => maker.id === id)
  }
}
