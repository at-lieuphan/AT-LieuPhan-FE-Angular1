import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.required],
      address: this.fb.group({
        home: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      pass: ['', Validators.required],
      passCof: ['', Validators.required],
      skills: this.fb.array([
        this.fb.control(''),
        this.fb.control('')
      ])

    })
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get skills() {
    return this.registerForm.get('skills') as FormArray;
  }

  get address() {
    return this.registerForm.get('address') as FormGroup;
  }

  get pass() {
    return this.registerForm.get('pass');
  }

  get passCof() {
    return this.registerForm.get('passCof');
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}
