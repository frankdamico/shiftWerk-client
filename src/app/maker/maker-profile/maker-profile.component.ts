import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maker-profile',
  templateUrl: './maker-profile.component.html',
  styleUrls: ['./maker-profile.component.scss'],
})
export class MakerProfileComponent implements OnInit {

  constructor() { }
  @Input() maker: any;

  ngOnInit() {}

}
