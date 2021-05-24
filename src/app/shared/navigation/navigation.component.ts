import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navBar = false;

  constructor() { }

  async ngOnInit(): Promise<void> {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.navBar = true;
    }
  }


}
