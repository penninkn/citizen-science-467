import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDataComponent } from './project-data/project-data.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddProjectComponent,
    ProjectDataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
