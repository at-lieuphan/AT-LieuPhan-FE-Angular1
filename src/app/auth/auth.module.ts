import { NgModule } from '@angular/core';
import { AuthRouter } from './auth-routing.module';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRouter
  ],
  providers: [
    AuthService,
    AuthGuard
  ]

})
export class AuthModule { }
