import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDataComponent } from './project-data/project-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddProjectComponent,
    ProjectDataComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class AdminModule {}
