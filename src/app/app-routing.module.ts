import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {UserDashboardComponent} from './users/user-dashboard/user-dashboard.component';
//import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';

//change this when login system is finalized
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

