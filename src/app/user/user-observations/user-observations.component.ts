import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-observations',
  templateUrl: './user-observations.component.html',
  styleUrls: ['./user-observations.component.scss']
})
export class UserObservationsComponent implements OnInit {

  sampleObservations: any;  
 
  constructor(private http: HttpClient) {}
    async ngOnInit() {
        this.sampleObservations = await this.http
        .get(environment.backendLocalUrl + 'observation/observations')
        .toPromise();
  }
}
