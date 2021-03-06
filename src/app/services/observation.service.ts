import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ObservationService {
  constructor(private http: HttpClient) { }

  getProjectObservations(projectId: string): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'observation/project/' + projectId)
      .toPromise();
  }

  getOneObservation(observationID): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'observation/' + observationID)
      .toPromise();
  }

  getAllObservations(): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'observation/observations')
      .toPromise();
  }

  getObservationsByUserAndProject(
    projectId: string,
    username: string
  ): Promise<any> {
    const request = {
      p_id: projectId,
      user: username,
    };
    return this.http
      .post(environment.backendUrl + 'observation/project/user', request)
      .toPromise();
  }

  getObservationsByUser(
    username: string
  ): Promise<any> {
    const request = {
      user: username
    };
    return this.http
      .post(environment.backendUrl + 'observation/user', request)
      .toPromise();
  }

  //is this being used anywhere? Don't see it in backend -EA
  getUserObservations(projectId: string): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'observation/user/' + projectId)
      .toPromise();
  }

  deleteObservation(observationID: string): Promise<any> {
    return this.http
      .delete(environment.backendUrl + 'observation/' + observationID)
      .toPromise();
  }
}
