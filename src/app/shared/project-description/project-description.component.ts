import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent implements OnInit {
  project;
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  async ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = await this.projectsService.getOneProject(projectId);
  }
}
