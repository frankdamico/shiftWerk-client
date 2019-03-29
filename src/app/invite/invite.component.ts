import { Component, OnInit, Input } from '@angular/core';
import { MakerService } from '../maker.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
})
export class InviteComponent implements OnInit {

  constructor(
    private makerService: MakerService,
  ) { }
  @Input() shift: any;
  @Input() results: any;
  @Input() i: any;

  invite(i) {
    console.log(this.shift['id']);
    console.log(this.shift['positions'][i]['position']);
    // this.NavClick.emit('search');
    this.makerService.getWerkers(this.shift['positions'][i]['position'])
      .subscribe(results => {
        this.results = results;
        console.log(this.results);
      });
  }

  ngOnInit() {}

}
