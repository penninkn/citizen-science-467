import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';
import {UserObservationsComponent} from './user/user-observations/user-observations.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent, AdminDashboardComponent, UserObservationsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}