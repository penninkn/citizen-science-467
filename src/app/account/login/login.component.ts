import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
      const res: any = await this.http
        .post(environment.backendUrl + 'auth/login', formData)
        .toPromise();

      console.log(res);

      localStorage.setItem('username', res.username);
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('dashboard');
    } catch (err) {
      window.alert(err.message);
    }
  }
}
