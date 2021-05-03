import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  sampleProjects: any;

  constructor(private http: HttpClient) {}
  async ngOnInit() {
    this.sampleProjects = await this.http
      .get(environment.backendUrl + 'project/projects')
      .toPromise();
  }
}
