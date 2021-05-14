import { MakeObservationComponent } from './user/make-observation/make-observation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserObservationsComponent } from './user/user-observations/user-observations.component';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';
import { UserDashboardComponent} from './user/user-dashboard/user-dashboard.component';
import { AddProjectComponent} from './admin/add-project/add-project.component';
import { UpdateObservationComponent } from './user/update-observation/update-observation.component'
import { DatePipe} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdminDashboardComponent,
    UserObservationsComponent,
    LoginComponent,
    UserDashboardComponent,
    MakeObservationComponent,
    AddProjectComponent,
    UpdateObservationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
