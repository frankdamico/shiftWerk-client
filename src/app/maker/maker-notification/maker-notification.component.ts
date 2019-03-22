import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maker-notification',
  templateUrl: './maker-notification.component.html',
  styleUrls: ['./maker-notification.component.scss'],
})
export class MakerNotificationComponent implements OnInit {

  constructor() { }
  @Input() application: any;

  ngOnInit() {}

}
