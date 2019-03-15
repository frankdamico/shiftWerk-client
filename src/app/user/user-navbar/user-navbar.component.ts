import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss'],
})
export class UserNavbarComponent implements OnInit {

  constructor() { }
  // @Output establishes event emitter to communicate with parent
  @Output() NavClick = new EventEmitter<string>();

  /** @method onClick
   * given a string representing the target view,
   * emits event to NavClick
   *
   * @param view - string name of view to be displayed
   */
  onClick(view: string) {
    this.NavClick.emit(view);
  }
  ngOnInit() {}

}
