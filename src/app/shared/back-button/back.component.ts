import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
})
export class BackButtonComponent {
  @Input() backUrl: string;
  @Input() buttonText: string = 'Back';

  constructor(private router: Router) {}

  onClick() {
    this.router.navigateByUrl(this.backUrl);
  }
}
