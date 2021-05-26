import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent implements OnInit {
  projectId;
  project;
  backUrl = 'projects';
  buttonText = 'Back to Projects';

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.project = await this.projectsService.getOneProject(this.projectId);
  }

  onMakeObservationClick(projectId) {
    this.router.navigateByUrl('make-observation/' + projectId);
  }

  onViewObservationsClick(projectId) {
    this.router.navigateByUrl('projects/observations/' + projectId);
  }
}
