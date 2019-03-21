import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maker-notifications',
  templateUrl: './maker-notifications.component.html',
  styleUrls: ['./maker-notifications.component.scss'],
})
export class MakerNotificationsComponent implements OnInit {

  constructor() { }
  @Input() applications: any[];

  ngOnInit() {}

}
