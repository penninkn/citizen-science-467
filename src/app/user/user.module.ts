import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserObservationsComponent } from './user-observations/user-observations.component';
import { MakeObservationComponent } from './make-observation/make-observation.component';
import { UpdateObservationComponent } from './update-observation/update-observation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserObservationsComponent,
    MakeObservationComponent,
    UpdateObservationComponent,
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
