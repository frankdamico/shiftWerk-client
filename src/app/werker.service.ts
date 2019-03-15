import { Injectable } from '@angular/core';
import data from 'mockDataWerker.json';

@Injectable({
  providedIn: 'root'
})
export class WerkerService {

  constructor() { }
  allWerkers: Array<any> = data;
  getWerkerById(id: Number): Object {
    return this.allWerkers.find(werker => werker.id === id);
  }
}
