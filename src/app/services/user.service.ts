import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async getUserInfo() {
    const username = localStorage.getItem('username');
    return await this.http
      .get(environment.backendUrl + 'users/' + username)
      .toPromise();
  }
}
