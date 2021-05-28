import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ObservationService } from 'src/app/services/observation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-observations',
  templateUrl: './user-observations.component.html',
  styleUrls: ['./user-observations.component.scss'],
})
export class UserObservationsComponent implements OnInit {
  observations;

  constructor(private http: HttpClient,
    private observationService: ObservationService,
    private router: Router) { }


  async ngOnInit(): Promise<void> {
    const username = localStorage.getItem('username');
    this.observations =
      await this.observationService.getObservationsByUser(
        username
      );
    console.log(this.observations[0]);
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
}
