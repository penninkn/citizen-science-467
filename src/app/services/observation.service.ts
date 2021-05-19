import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http: HttpClient) { }

  getAllObservations(): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'observation/observations')
      .toPromise();
  }

  getOneObservation(observationID): Promise<any> {
    return this.http
      .get(environment.backendUrl + 'observation/' + observationID)
      .toPromise();
  }

}
