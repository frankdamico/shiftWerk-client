import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MakerSearchBarComponent } from '../maker-search-bar/maker-search-bar.component'
import { MakerService } from 'src/app/maker.service';

@Component({
  selector: 'app-maker-search',
  templateUrl: './maker-search.component.html',
  styleUrls: ['./maker-search.component.scss'],
})


export class MakerSearchComponent implements OnInit {

  werkers: any
  view = 'search'
  constructor(
    private makerService: MakerService,
  ) { }
  
  ngOnInit() {
  }
  
  searchFunc = (event) => {
    this.makerService.getWerkers(event).subscribe(werkers => {
      this.werkers = werkers;
    })
  }

  setWerkers = (werkers) => {
    console.log(werkers);
    this.werkers = werkers;
  }
}
