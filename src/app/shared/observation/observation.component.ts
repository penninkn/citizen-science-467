import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss'],
})
export class ObservationComponent implements OnInit {
  project;
  projectId;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  async ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.project = await this.projectsService.getOneProject(this.projectId);
  }
}
