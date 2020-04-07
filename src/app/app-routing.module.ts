import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  { path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: './not-found'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
