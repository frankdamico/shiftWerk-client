import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.scss'],
})
export class MakerHomeComponent implements OnInit {

  constructor() { }
  @Input() shifts: Array<any>;
  @Input() unfulfilled: Array<any>;
  @Input() fulfilled: Array<any>;
  @Input() maker: any;

  @Output() NavClick = new EventEmitter<string>();

  onNavClick(view: string) {
    this.NavClick.emit(view);
  }

  ngOnInit() {

  }

}
