import { environment } from './../../../environments/environment';
import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';

@Component({
  selector: 'app-make-observation',
  templateUrl: './make-observation.component.html',
  styleUrls: ['./make-observation.component.scss'],
})
export class MakeObservationComponent implements OnInit {
  public latitude;
  public longitude;
  user: any;

  constructor(
    private usersService: UserService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
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
    this.user = await this.usersService.getUserInfo();
  }

  getLocation() {
    this.geolocation$.subscribe((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    });
  }

  async onSubmit() {
    let obsData = {
      user: this.user._id,
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
          .post(environment.backendUrl + 'observation/create', obsData)
        .toPromise();

      console.log(res);
    } catch (err) {
      window.alert(err.message);
    }
    // add put obs id to user
    this.obsForm.reset();
  }
}
function username(username: any) {
  throw new Error('Function not implemented.');
}
