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
import { ApiService } from './core/services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { LoadingService } from './auth/service/loading.service';

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
    HttpClientModule,
    AccountModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
