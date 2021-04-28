import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {


 
  constructor() { }
    sample_projects:object[];
  ngOnInit(): void {
    this.sample_projects = [
      {'id': 1,
      'title': 'TidePools',
      'type': 'oceans/streams',
      'description': 'sample sample sample sample sample'},
      {'id': 2,
      'title': 'Local Animals',
      'type': 'animals',
      'description': 'sample sample sample sample sample'},
      {'id': 3,
      'title': 'Stargazing',
      'type': 'weather',
      'description': 'sample sample sample sample sample'},


    ]
  
  }

}
