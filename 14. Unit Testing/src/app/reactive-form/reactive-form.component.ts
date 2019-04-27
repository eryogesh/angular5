import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../models/user';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  disableID = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      username: [null, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)])],
      gender: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.required],
      address: this.fb.group({
        city: [null, Validators.required],
        zip: 0
      })
    });

    // this.registerForm = new FormGroup({
    //   id: new FormControl(),
    //   someProp: new FormControl(),
    //   name: new FormControl(),
    //   username: new FormControl(),
    //   gender: new FormControl(),
    //   email: new FormControl(),
    //   phone: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(),
    //     zip: new FormControl()
    //   })
    // });

    this.registerForm.valueChanges.subscribe(() => {

      if (this.registerForm.controls['id'].value === 10) {
        setTimeout(() => {
          this.registerForm.get('id').disable();
        }, 10);

      }
    });

  }

  logForm(value: IUser) {
    console.log(value);
    console.log(value.name);
  }
}
