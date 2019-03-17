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
  public positions:string[] = []
  public availability:boolean = false;

  constructor() { }
  
  toggleAvail() {
    console.log('im available!');
  }
  werkerPosition(position) {
    console.log(position);
    const index = this.positions.indexOf(position);
    index >= 0 ? this.positions.splice(index, 1) : this.positions.push(position);
    console.log(this.positions);
  }
  onSave() {
    console.log("I'm saving");
  }
  ngOnInit() {}

}
