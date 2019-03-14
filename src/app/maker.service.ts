import { Injectable } from '@angular/core';
import data from 'mockDataMaker.json';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor() { }
  allMakers: Array<any> = data;
  getMakerById(id: Number) {
    return this.allMakers.find(maker => maker.id === id);
  }
}
