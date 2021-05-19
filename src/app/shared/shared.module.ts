//import { MakeObservationComponent } from './../user/make-observation/make-observation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ObservationComponent } from './observation/observation.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ProjectObservationsComponent } from './project-observations/project-observations.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProjectsComponent,
    ObservationComponent,
    ProjectDescriptionComponent,
    ProjectObservationsComponent,
    //MakeObservationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ProjectsComponent],
})
export class SharedModule {}
