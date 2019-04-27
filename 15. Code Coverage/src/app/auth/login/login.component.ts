import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, DoLoginAction } from '../../state/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.dispatch(new DoLoginAction(true));
  }

}
