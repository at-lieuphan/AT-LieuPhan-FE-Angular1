import { Injectable } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  constructor(private apiService: ApiService) { }

  getAllUser() {
    this.apiService.get(ENDPOINT.users, {page: 2}).subscribe(e => {
      console.log(e);
    })
    this.apiService.getAssets('assets/data/db.json').subscribe(e => {
      console.log(e);
    })
  }

  addUser(object: Object) {
    this.apiService.post(ENDPOINT.users, object).subscribe(e => {
    console.log(e);
    })
  }
// làm sao để post đc lên reqres

  login(userName: string, passWord: string) {
    let user = {
      userName: userName,
      password: passWord
    }
    this.getAllUser();
    if (userName === 'admin' && passWord === 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    return this.isLogin;
  }

  logOut() {
    localStorage.removeItem('user');
    this.isLogin = false;
  }
}
