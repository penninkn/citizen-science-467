import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  projects;
  backendUrl = 'http://localhost:3000/project/projects';
  constructor(private http: HttpClient) {}
  title = 'frontend';

  async ngOnInit() {
    this.projects = await this.http.get<any>(this.backendUrl).toPromise();
    console.log(this.projects);
  }
}
