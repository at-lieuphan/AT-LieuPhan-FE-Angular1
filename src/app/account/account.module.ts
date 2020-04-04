import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { accountRoutes } from './account-routing.module';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(accountRoutes)
  ]
})
export class AccountModule { }
