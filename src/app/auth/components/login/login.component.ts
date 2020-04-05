import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]]
    })
  }

  onLogin() {
    this.authService.login(this.loginForm.controls.name.value, this.loginForm.controls.password.value);
    console.log(this.authService.isLogin)
    if (this.authService.isLogin === true) {
      this.router.navigateByUrl('');
    }
    else {
      return confirm('Your account has an error or has not been registered!')
    }
  }

  get name() {
    return this.loginForm.get('name');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
