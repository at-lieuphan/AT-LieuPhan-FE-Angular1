import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BrowserModule } from '@angular/platform-browser';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterFormComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthRouter { }