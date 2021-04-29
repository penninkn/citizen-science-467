import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

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

    try {
      const res = await this.http
        .post('http://localhost:3000/auth/login', formData)
        .toPromise();

      this.router.navigateByUrl('dashboard');
    } catch (err) {
      window.alert(err.message);
    }
  }
}
