import { Component, OnInit } from '@angular/core';
import { ObservationService } from 'src/app/services/observation.service';
import { Router } from '@angular/router';
import { Parser } from 'json2csv';

@Component({
  selector: 'app-observations-list',
  templateUrl: './observations-list.component.html',
  styleUrls: ['./observations-list.component.scss'],
})
export class ObservationListComponent implements OnInit {
  observations;
  allObservations;

  constructor(
    private observationService: ObservationService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.observations = await this.observationService.getAllObservations();
  }

  onViewClick(observationID) {
    this.router.navigateByUrl('observation/' + observationID);
  }

  onEditClick(observationId) {
    this.router.navigateByUrl('update-observation/' + observationId);
  }

  async onDeleteClick(observationId) {
    try {
      await this.observationService.deleteObservation(observationId);
      this.ngOnInit();
    } catch (err) {
      window.alert('Unable to delete observation.');
    }
  }

  async downloadObservations() {
    this.allObservations = await this.observationService.getAllObservations();
    for (let observation of this.allObservations) {
      observation.user = observation.user.username;
      observation.project = observation.project.title;
    }
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
