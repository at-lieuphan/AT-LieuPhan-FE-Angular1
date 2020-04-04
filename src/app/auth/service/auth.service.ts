import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  constructor() { }

  login(userName: string, passWord: string) {
    let user = {
      userName: userName,
      password: passWord
    }
    if (userName === 'admin' && passWord === 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    return this.isLogin;
  }
}
