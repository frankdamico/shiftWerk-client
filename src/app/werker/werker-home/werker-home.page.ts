import { Component, OnInit } from '@angular/core';
import { WerkerService } from 'src/app/werker.service';

@Component({
  selector: 'app-werker-home',
  templateUrl: './werker-home.page.html',
  styleUrls: ['./werker-home.page.scss'],
})
export class WerkerHomePage implements OnInit {

  constructor(
    private werkerService: WerkerService
  ) { }
  werker = {};
  view = 'home';
  ngOnInit() {
    this.werker = this.werkerService.getWerkerById(0);
  }
  onNavClick(view) {
    console.log(view);
    this.view = view;
  }
}
