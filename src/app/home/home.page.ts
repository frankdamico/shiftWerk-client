import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  login(role: string) {
    this.auth.login(role)
      .subscribe(res => this.router.navigate([`${role}-home`]), err => console.log(err));
  }
  ngOnInit() {
  }
}
