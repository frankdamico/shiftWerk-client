import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-werker-profile',
  templateUrl: './werker-profile.component.html',
  styleUrls: ['./werker-profile.component.scss'],
})
export class WerkerProfileComponent implements OnInit {

  // grabs input from HTML
  // if i need the value use this.nameFirst
  public nameFirst:string;
  public nameLast:string;
  public email:string;
  public phoneNumber:number;
  public positions: string[] = []

  constructor() { }
  
  onChange(value) {
    console.log(value);

  }
  onSave() {
    console.log("I'm saving");
  }
  ngOnInit() {}

}
