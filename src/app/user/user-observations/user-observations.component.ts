import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-observations',
  templateUrl: './user-observations.component.html',
  styleUrls: ['./user-observations.component.scss']
})
export class UserObservationsComponent implements OnInit {

  my_observations: object[];
  constructor() { }

  ngOnInit(): void {
    this.my_observations = [
      { 'id': 1,
        'title': 'Lots of Fish',
        'project': 'Tidepool Fun',
        'description': 'fillertext fillertext fillertext fillertext fillertext fillertext fillertext fillertext'},
        { 'id': 2,
        'title': 'I Saw A Raccon!',
        'project': 'Local Dogs',
        'description': 'fillertext fillertext fillertext fillertext fillertext fillertext fillertext fillertext'},
        
    ]
  }

}
