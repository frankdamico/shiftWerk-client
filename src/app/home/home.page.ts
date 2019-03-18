import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  authorize(role: string) {
    this.auth.setUserInfo(role)
      .subscribe(res => {
        console.log(res);
        this.auth.user = res;
        this.router.navigateByUrl(`${role}-home`);
      });
  }
}
