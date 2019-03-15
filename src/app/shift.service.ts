import { Injectable } from '@angular/core';
import data from 'mockDataShift.json';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor() { }
  /**
   * @todo make network request for shifts from DB
   * @todo change type signature to Array<Shift>
   */
  allShifts: Array<any> = data;
}
