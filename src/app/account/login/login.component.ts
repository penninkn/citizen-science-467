import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute
  ) { }
  message: string;
  created: string;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.created = params['created'];
    });
    if (this.created == 'success') {
      this.message = "Account created successfully. Please log in below!"
    }


    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.router.navigateByUrl('dashboard');
    }
  }

  async onSubmit() {
    let formData = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    };

    try {
      const res: any = await this.http
        .post(environment.backendUrl + 'auth/login', formData)
        .toPromise();
      localStorage.setItem('username', res.username);
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('dashboard');
    } catch (err) {
      this.message = err.error.error;
    }
  }
}