import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

export const accountRoutes: Routes = [
  {
    path: 'account', component: AccountComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: 'profile', component: ProfileComponent
      }
    ]
  }
];
