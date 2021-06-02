import { Component, OnInit } from '@angular/core';
import { ObservationService } from 'src/app/services/observation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  user: any;
  allObservations: any;

  constructor(
    private usersService: UserService,
    private observationsService: ObservationService
  ) {}

  async ngOnInit() {
    this.user = await this.usersService.getUserInfo();
  }

}
