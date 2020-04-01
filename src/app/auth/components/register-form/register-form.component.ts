import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {  }

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   address: new FormGroup({
    //     home: new FormControl(''),
    //     street: new FormControl(''),
    //     city: new FormControl('')
    //   }),
      
    // })
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
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

  get skills() {
    return this.registerForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}
