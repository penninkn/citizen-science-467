import { UserObservationsComponent } from './user/user-observations/user-observations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { ProjectsComponent } from './shared/projects/projects.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ProjectDescriptionComponent } from './shared/project-description/project-description.component';
import { ObservationComponent } from './shared/observation/observation.component';
import { ProjectObservationsComponent } from './shared/project-observations/project-observations.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'logout', component: LogoutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:id', component: ProjectDescriptionComponent },
      {
        path: 'projects/observations',
        component: ProjectObservationsComponent,
      },
      { path: 'projects/observations/:id', component: ObservationComponent },
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'observations', component: UserObservationsComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'add-project', component: AddProjectComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
