import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ObservationComponent } from './observation/observation.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ProjectObservationsComponent } from './project-observations/project-observations.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { BackButtonComponent } from './back-button/back.component';
import { SummaryPipe } from '../CustomPipe/Summary.pipe';
import { SingleObservationComponent } from './single-observation/single-observation.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ObservationComponent,
    ProjectDescriptionComponent,
    ProjectObservationsComponent,
    NavigationComponent,
    BackButtonComponent,
    SummaryPipe,
    SingleObservationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ProjectsComponent,
    NavigationComponent,
    BackButtonComponent,
    SingleObservationComponent,
  ],
})
export class SharedModule {}
