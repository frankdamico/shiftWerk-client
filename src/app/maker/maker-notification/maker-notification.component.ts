import { Component, OnInit, Input } from '@angular/core';
import { ShiftService } from 'src/app/shift.service';

@Component({
  selector: 'app-maker-notification',
  templateUrl: './maker-notification.component.html',
  styleUrls: ['./maker-notification.component.scss'],
})
export class MakerNotificationComponent implements OnInit {

  constructor(
    private shiftService: ShiftService
  ) { }
  @Input() application: any;

  respond(status: string) {
    return this.shiftService.respondToInvitation(this.application.id, this.application.shiftId, status)
      .subscribe(() => {
        console.log('done!');
      });
  }

  ngOnInit() {}

}
