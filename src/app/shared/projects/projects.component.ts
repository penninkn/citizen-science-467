import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  sampleProjects: any;
  projectType: string;

  constructor(private route: ActivatedRoute,
    private projectsService: ProjectsService) { }
  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.projectType = params['type'];
    });
    if (this.projectType) {
      this.sampleProjects = await this.projectsService.getProjectsByType(this.projectType);
    }
    else {
      this.sampleProjects = await this.projectsService.getAllProjects();

    }
  }
}
