import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  user: any;

  constructor(private usersService: UserService) { }

  async ngOnInit() {
    const username = this.getUsernameFromLocalStorage();
    this.user = await this.usersService.getUserInfo(username);
  }

  private getUsernameFromLocalStorage() {
    return localStorage.getItem('username');
  }

}
