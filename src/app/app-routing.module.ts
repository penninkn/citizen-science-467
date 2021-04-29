import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { LogoutComponent } from './account/logout/logout.component';
import { ProjectsComponent } from './shared/projects/projects.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
//import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';

//change this when login system is finalized
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dashboard', component: UserDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
