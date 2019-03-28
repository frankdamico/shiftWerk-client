import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-werker-invited-shift',
  templateUrl: './werker-invited-shift.component.html',
  styleUrls: ['./werker-invited-shift.component.scss'],
})
export class WerkerInvitedShiftComponent implements OnInit {

  constructor(
    public toastController: ToastController
  ) { }
  @Output() respondToInvitation = new EventEmitter<object>();
  @Input()
  invitedShift:any;

  async presentToast(answer) {
    const toast = await this.toastController.create({
      message: `Invitation ${answer}`,
      duration: 2000,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }

  onRespond(status) {
    this.respondToInvitation.emit({shiftId: this.invitedShift.id, status});
  }

  ngOnInit() {}

}
