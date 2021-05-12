import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'project/projects')
      .toPromise();
  }

  getOneProject(projectID): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'project/' + projectID)
      .toPromise();
  }
}
