import { Injectable } from "@angular/core";
import { ProfileComponent } from '../components/profile/profile.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileCanDeactivate implements CanDeactivate<ProfileComponent> {
  constructor() {}

  canDeactivate(
    component: ProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(component.isTyping) {
      return confirm('Your data will lose if you change page!')
    }
    return true;
  }
}