import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservationService } from 'src/app/services/observation.service';

@Component({
  selector: 'app-single-observation',
  templateUrl: './single-observation.component.html',
  styleUrls: ['./single-observation.component.scss'],
})
export class SingleObservationComponent implements OnInit {
  observation;

  constructor(
    private observationService: ObservationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const observationId = this.route.snapshot.paramMap.get('id');
    this.observation = await this.observationService.getOneObservation(
      observationId
    );
  }

  onEditClick(observationId) {
    this.router.navigateByUrl('update-observation/' + observationId);
  }

  async onDeleteClick(observationId) {
    await this.observationService.deleteObservation(observationId);
    this.router.navigateByUrl('admin-observations');
  }
}
