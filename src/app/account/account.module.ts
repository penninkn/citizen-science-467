import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationComponent, LogoutComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [],
})
export class AccountModule {}
