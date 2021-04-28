import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  ngOnInit(): void {}

  async onSubmit() {
    let formData = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    };

    console.log(formData);
    const res = await this.http
      .post('http://localhost:3000/auth/login', formData)
      .toPromise();

    console.log(res);

    //TODO: store res.token in sessionStorage! This is our sessiontoken and will allow the user to access protected resources
    //TODO: add error handling for failed login
  }
}