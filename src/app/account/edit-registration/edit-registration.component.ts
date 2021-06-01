import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-registration',
  templateUrl: './edit-registration.component.html',
  styleUrls: ['./edit-registration.component.scss'],
})
export class EditRegistrationComponent implements OnInit {
  message: string;
  user;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.message = '';
    if (sessionStorage.getItem('isLoggedIn')) {
      await this.populateFormData();
    }
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
    };

    try {
      const res: any = await this.http
        .put(
          environment.backendUrl + 'auth/register/' + this.user._id,
          formData
        )
        .toPromise();
      localStorage.setItem('username', formData.username);
      localStorage.setItem('token', res.token.accessToken);

      window.alert('Profile updated succesfully!');
      this.router.navigateByUrl('profile');
    } catch (err) {
      this.message = err.error.error || err.error.message;
    }
  }

  async populateFormData(): Promise<void> {
    this.user = await this.userService.getUserInfo();
  }
}
