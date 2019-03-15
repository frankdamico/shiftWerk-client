import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss'],
})
export class UserNavbarComponent implements OnInit {

  constructor() { }
  @Output() NavClick = new EventEmitter<string>();
  onClick(view: string) {
    this.NavClick.emit(view);
  }
  ngOnInit() {}

}
