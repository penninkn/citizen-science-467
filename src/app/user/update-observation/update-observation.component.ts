import { environment } from './../../../environments/environment';
import { UserService } from './../../services/user.service';
import { ObservationService } from './../../services/observation.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-observation',
  templateUrl: './update-observation.component.html',
  styleUrls: ['./update-observation.component.scss'],
})
export class UpdateObservationComponent implements OnInit {
  public latitude;
  public longitude;
  public date;

  user: any;

  public observation;
  public observationID;

  buttonText = 'Return to Project';
  backUrl = null;

  constructor(
    private usersService: UserService,
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private datePipe: DatePipe,
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

  async ngOnInit() {
    this.observationID = this.route.snapshot.paramMap.get('id');
    this.observation = await this.observationService.getOneObservation(
      this.observationID
    );

    this.user = await this.usersService.getUserInfo();

    this.date = this.datepipe.transform(this.observation.date, 'yyyy-MM-dd','UTC');
    this.longitude = this.observation.longitude;
    this.latitude = this.observation.latitude;
    this.backUrl = 'projects/' + this.observation.project;
  }

  getLocation() {
    this.geolocation$.subscribe((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    });
  }

  async onSubmit() {
    let obsData = {
      user: this.user.id,
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
        .put(
          environment.backendUrl + 'observation/' + this.observationID,
          obsData
        )
        .toPromise();
      window.alert('Observation updated!');
      this.router.navigateByUrl(this.backUrl);
    } catch (err) {
      window.alert(err.message);
    }
    this.obsForm.reset();
  }
}
