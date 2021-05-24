import { ObservationService } from './../../services/observation.service';
import { Component, OnInit } from '@angular/core';

import { Parser } from 'json2csv';

@Component({
  selector: 'app-download-observations',
  templateUrl: './download-observations.component.html',
  styleUrls: ['./download-observations.component.scss'],
})
export class DownloadObservationsComponent implements OnInit {


  allObservations: any;

  constructor(private observationsService: ObservationService) {}

  ngOnInit(): void {}

  async downloadObservations() {
    
    this.allObservations = await this.observationsService.getAllObservations();
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(this.allObservations);

    // from https://www.javatpoint.com/javascript-create-and-download-csv-file

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = "All_Observations.csv";
    hiddenElement.click();

  }
}
