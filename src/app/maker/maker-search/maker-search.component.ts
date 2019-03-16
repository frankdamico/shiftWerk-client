import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maker-search',
  templateUrl: './maker-search.component.html',
  styleUrls: ['./maker-search.component.scss'],
})
export class MakerSearchComponent implements OnInit {

  public searchTerm: string
  constructor() { }
  
  ngOnInit() {}

  /**
   * @method searchList
   * passes the search terms to the server service
   */
  searchList(event) {
    // this.searchTerm = value;
    console.log(event.detail.value);
  }
}
