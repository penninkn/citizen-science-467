import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navBar = false;

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {}

  onLogout() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      localStorage.removeItem('user');
      localStorage.removeItem('username');
      sessionStorage.removeItem('isLoggedIn');
      window.alert('Successfully logged out!');
      this.router.navigateByUrl('/login');
    } else {
      window.alert('Please login to continue...');
    }
  }
}
