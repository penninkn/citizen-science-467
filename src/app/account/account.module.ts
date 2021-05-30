import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { EditRegistrationComponent } from './edit-registration/edit-registration.component';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent, EditRegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [],
})
export class AccountModule {}
