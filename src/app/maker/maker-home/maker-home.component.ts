import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.scss'],
})
export class MakerHomeComponent implements OnInit {

  constructor() { }

  @Input() unfulfilled: Array<any>;
  @Input() fulfilled: Array<any>;
  @Input() maker: any;
  ngOnInit() {}

}
