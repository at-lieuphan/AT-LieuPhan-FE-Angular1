import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullname = '';
  email = '';
  homeNumber = '';
  streetName = '';
  city = '';
  passWord = '';
  passConfig = '';

  constructor() { }

  register(f: NgForm) {
    console.log(f.value);
  }

}
