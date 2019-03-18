import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MakerService } from 'src/app/maker.service';
import { MakerSearchComponent } from '../maker-search/maker-search.component';


@Component({
  selector: 'app-maker-search-bar',
  templateUrl: './maker-search-bar.component.html',
  styleUrls: ['./maker-search-bar.component.scss'],
  providers: [MakerSearchComponent],
})

export class MakerSearchBarComponent implements OnInit {
  werkers: any;
  view: any;
  constructor(
    private makerService: MakerService,
    private makerSearchComponent: MakerSearchComponent
  ) { }
  
  ngOnInit() {
  }
  searchFunc = (event) => {
    this.makerService.getWerkers(event).subscribe(werkers => {
      console.log(event);
      this.werkers = werkers;
      console.log(werkers);
    })
  };
  
  onClick(view: string) {
    this.view = 'search';
    this.makerSearchComponent.setWerkers(this.werkers)

  }
}
