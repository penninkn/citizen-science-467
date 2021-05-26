import { Component, OnInit } from '@angular/core';
import { ObservationService } from 'src/app/services/observation.service';
import { UserService } from 'src/app/services/user.service';
import { Parser } from 'json2csv';

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

  async downloadObservations() {
    this.allObservations = await this.observationsService.getAllObservations();
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(this.allObservations);

    // from https://www.javatpoint.com/javascript-create-and-download-csv-file

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'All_Observations.csv';
    hiddenElement.click();
  }
}
