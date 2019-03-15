import { Injectable } from '@angular/core';
import data from 'mockDataShift.json';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }
  allShifts: Array<any> = data;
}
