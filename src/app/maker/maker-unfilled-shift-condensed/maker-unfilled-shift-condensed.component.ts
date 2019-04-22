import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Shift, Position } from 'src/app/types';

@Component({
  selector: 'app-maker-unfilled-shift-condensed',
  templateUrl: './maker-unfilled-shift-condensed.component.html',
  styleUrls: ['./maker-unfilled-shift-condensed.component.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class MakerUnfilledShiftCondensedComponent implements OnInit {
  positions: Position[];
  positionCounts: {
    position: string,
    total: number,
    filled: number,
    focused: boolean,
  }[] = [];
  totalCount: number = 0;
  focusedPosition: {position: string, total: number, filled: number, focused: boolean} | null;

  constructor(
    public toastController: ToastController
  ) { }

  @Input() shift: Shift;
  @Input() unfilled: Array<any>;
  @Output() NavClick = new EventEmitter<string>();

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Sent ${answer} to Werkers`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  getInvites(position) {
    this.positionCounts.forEach(listPosition => {
      if (position.position === listPosition.position) {
        listPosition.focused = !listPosition.focused;
        this.focusedPosition = listPosition.focused ? listPosition : null;
      } else {
        listPosition.focused = false;
      }
    });
  }

  anyFocused() {
    return this.positions.some(position => position.focused);
  }

  ngOnInit() {
    this.positions = this.shift.positions.map(position => Object.assign(position, {focused: false}));
    this.positionCounts = this.positions.reduce((listPositionCounts, pos) => {
      if (pos.filled) {
        this.totalCount++;
      }
      const { position } = pos;
      const index = listPositionCounts.findIndex(entry => entry.position === position);
      if (index === -1) {
        return listPositionCounts.concat([{position: position, total: 1, filled: pos.filled ? 1 : 0, focused: false}]);
      }
      listPositionCounts[index].total++;
      if (pos.filled) {
        listPositionCounts[index].filled++;
      }
      return listPositionCounts;
    }, []);
  }
}
