import { Injectable } from '@angular/core';
import data from 'mockDataMaker.json';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor() { }
  allMakers: Array<Object> = data;
  getMakerById(id: Number): Object {
    return data.find(maker => maker.id === id);
  }
}
