import { ObservationService } from './../../services/observation.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';

@Component({
  selector: 'app-update-observation',
  templateUrl: './update-observation.component.html',
  styleUrls: ['./update-observation.component.scss'],
})
export class UpdateObservationComponent implements OnInit {
  public latitude;
  public longitude;
  observation: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private observationService: ObservationService,
    private route: ActivatedRoute,
    private readonly geolocation$: GeolocationService
  ) {}

  obsForm = this.fb.group({
    username: [''],
    title: [''],
    date: Date,
    observation: [''],
    city: [''],
    state: [''],
    longitude: Number,
    latitude: Number,
  });

  async ngOnInit(){
    const observationID = this.route.snapshot.paramMap.get('id');
    this.observation = await this.observationService.getOneObservation(observationID);
    console.log(this.observation);
  }

  getLocation() {
    this.geolocation$.subscribe((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    });
  }

  async onSubmit() {
    let obsData = {
      user: localStorage.user,
      title: this.obsForm.get('title').value,
      text: this.obsForm.get('observation').value,
      date: this.obsForm.get('date').value,
      city: this.obsForm.get('city').value,
      state: this.obsForm.get('state').value,
      longitude: this.obsForm.get('longitude').value,
      latitude: this.obsForm.get('latitude').value,
    };
    try {
      const res: any = await this.http
        .put('http://localhost:3000/observation/update', obsData)
        .toPromise();

      console.log(res);
    } catch (err) {
      window.alert(err.message);
    }
    this.obsForm.reset();
  }
}
