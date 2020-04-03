import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    RegisterComponent,
    RegisterFormComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
