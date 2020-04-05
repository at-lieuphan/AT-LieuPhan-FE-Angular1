import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/components/header/header.component';
import { FooterComponent } from './share/components/footer/footer.component';
import { BannerComponent } from './share/components/banner/banner.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
