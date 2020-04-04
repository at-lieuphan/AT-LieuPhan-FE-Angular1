import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: []
})
export class AccountModule { }
