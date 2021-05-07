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
    console.log(this.user);
  }

  getLocation() {
    this.geolocation$.subscribe((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
    });
  }

  async onSubmit() {
    let obsData = {
      user: this.user.username,
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
        .post('http://localhost:3000/observation/create', obsData)
        .toPromise();

      var userObs = { observation: res.observation._id };
      //console.log(userObs);

      console.log(res);
      this.obsForm.reset();
    } catch (err) {
      window.alert(err.message);
    }
  }
}
