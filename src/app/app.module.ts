import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/components/header/header.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { RegisterComponent } from './auth/components/register/register.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './share/components/banner/banner.component';
import { RegisterFormComponent } from './auth/components/register-form/register-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AccountComponent } from './account/components/account/account.component';
import { DashboardComponent } from './account/components/dashboard/dashboard.component';
import { ProfileComponent } from './account/components/profile/profile.component';
import { AccountModule } from './account/account.module';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    RegisterComponent,
    RegisterFormComponent,
    HomeComponent,
    NewsComponent,
    LoginComponent,
    //AccountComponent,
    //DashboardComponent,
    //ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccountModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
