import { Injectable } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/services/api.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}