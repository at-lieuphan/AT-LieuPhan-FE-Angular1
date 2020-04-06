import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from '../auth/service/auth.guard';
import { DataResolver } from './service/data.guard';
import { ProfileCanDeactivate } from './service/profile.candeactive';

export const accountRoutes: Routes = [
  {
    path: 'account', component: AccountComponent,
    // not delete account
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'profile', component: ProfileComponent,
        canDeactivate: [ProfileCanDeactivate],
        resolve: {
          userData: DataResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(accountRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, DataResolver, ProfileCanDeactivate]
})
export class AccountRoutingModule { }
