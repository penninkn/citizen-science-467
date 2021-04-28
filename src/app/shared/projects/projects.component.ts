import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
