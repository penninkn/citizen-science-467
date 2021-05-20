import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    sessionStorage.removeItem('isLoggedIn');
    window.alert('Successfully logged out!');
    this.router.navigateByUrl('/login');
  }
}
