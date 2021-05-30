import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private router: Router) {}

  async ngOnInit() {
    this.user = await this.userService.getUserInfo();
  }

  onEditClick() {
    this.router.navigateByUrl('edit-profile/' + this.user._id);
  }
}
