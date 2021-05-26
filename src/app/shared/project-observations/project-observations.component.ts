import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservationService } from 'src/app/services/observation.service';

@Component({
  selector: 'app-project-observations',
  templateUrl: './project-observations.component.html',
  styleUrls: ['./project-observations.component.scss'],
})
export class ProjectObservationsComponent implements OnInit {
  @Input() projectId: any;
  @Input() getByUser;
  observations;

  constructor(
    private observationService: ObservationService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    if (!this.getByUser) {
      this.observations = await this.observationService.getProjectObservations(
        this.projectId
      );
    } else {
      const username = localStorage.getItem('username');
      this.observations =
        await this.observationService.getObservationsByUserAndProject(
          this.projectId,
          username
        );
    }
  }

  onEditClick(observationId) {
    this.router.navigateByUrl('update-observation/' + observationId);
  }
}
