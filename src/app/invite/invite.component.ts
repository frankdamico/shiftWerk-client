import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
})
export class InviteComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }
  @Input() shift: any;
  @Input() results: any;
  @Input() i: any;

  invite(i) {
    console.log(this.shift['id']);
    console.log(this.shift['positions'][i]['position']);
    // this.NavClick.emit('search');
    this.userService.getWerkers(this.shift['positions'][i]['position'])
      .subscribe(results => {
        this.results = results;
        console.log(this.results);
      });
  }

  ngOnInit() {}

}
