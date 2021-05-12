import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  sampleProjects: any;

  constructor(private projectsService: ProjectsService) {}
  async ngOnInit() {
    this.sampleProjects = await this.projectsService.getAllProjects();
  }
}
