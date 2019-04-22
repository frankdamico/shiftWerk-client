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
  count = 0;
  focusedPosition: Position | null;

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

  getUnfilled() {
    for(let i = 0; i < this.positions.length; i++) {
      if (this.positions[i].filled === false) {
        this.count += 1;
      }
    }
  }

  getInvites(position) {
    this.positions.forEach(listPosition => {
      if (position.id === listPosition.id) {
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
  }
}
