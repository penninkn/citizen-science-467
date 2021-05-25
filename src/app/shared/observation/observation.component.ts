import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss'],
})
export class ObservationComponent implements OnInit {
  project;
  projectId;
  backUrl = 'projects';
  buttonText = 'Back to Projects';
  observationText = 'See Project Details';

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.project = await this.projectsService.getOneProject(this.projectId);
  }

  onClick() {
    this.router.navigateByUrl('projects/' + this.projectId);
  }
}
