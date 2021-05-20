import { UpdateObservationComponent } from './user/update-observation/update-observation.component';
import { MakeObservationComponent } from './user/make-observation/make-observation.component';
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
import { RegistrationComponent } from './account/registration/registration.component';
import { DashboardGuard } from './guards/dashboard.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

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
      {
        path: 'dashboard',
        component: UserDashboardComponent,
        canActivate: [DashboardGuard],
      },
      { path: 'observations', component: UserObservationsComponent },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        canActivate: [AdminGuard],
      },
      { path: 'add-project', component: AddProjectComponent },
      { path: 'add-observation', component: MakeObservationComponent},
      { path: 'update-observation/:id', component: UpdateObservationComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
