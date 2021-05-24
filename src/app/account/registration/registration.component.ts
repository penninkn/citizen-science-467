import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  message: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
  }

  userForm = this.fb.group({
    first_name: [''],
    last_name: [''],
    age: [''],
    username: [''],
    email: [''],
    password: [''],
  });

  async onSubmit() {
    let formData = {
      first_name: this.userForm.get('first_name').value,
      last_name: this.userForm.get('last_name').value,
      age: this.userForm.get('age').value,
      username: this.userForm.get('username').value,
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value,
      admin: false,
    };

    try {
      const res = await this.http
        .post(environment.backendUrl + 'auth/register', formData)
        .toPromise();

      this.router.navigateByUrl('login?created=success');
    } catch (err) {
      console.log(err);
      this.message = err.error.error;
    }
  }
}
