import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent implements OnInit {

  user: IUser = {
    id: -1,
    name: '',
    username: '',
    gender: '',
    email: '',
    phone: '',
    address: {
      city: '',
      zip: 0
    }
  };

  isInvalid() {
    return this.user.name.length === 0 || (this.user.name.length > 0 && this.user.name.length < 4) || this.user.name === 'bob';
  }

  constructor() { }

  ngOnInit() {
  }

  logForm() {
    console.log(this.user);
  }
}
