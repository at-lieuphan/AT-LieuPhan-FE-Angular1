import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/auth/service/loading.service';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  constructor(private authService: AuthService , private loadingService: LoadingService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenUser = this.authService.isLogin;
    // ? isLogin === tokenUserValue
     if(req.params.get('preventLoading')) {
       req = req.clone({
        params: req.params.delete('preventLoading')
       });
     } else {
        // this.loadingService.switch(true);
        this.loadingService.show();
    }
    if (tokenUser) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenUser}`
        }
      });
    }
    return next.handle(req).pipe(
      // finalize(() => this.loadingService.switch(false))
      finalize(() => this.loadingService.hide())
    );
  }
}