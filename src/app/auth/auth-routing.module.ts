import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterFormComponent}
];