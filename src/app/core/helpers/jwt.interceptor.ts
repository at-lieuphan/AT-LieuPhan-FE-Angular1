import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //const authToken = this.authService.getAuthorizationToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization','logged')
    });
    return next.handle(authReq);
  }
}
