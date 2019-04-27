import { Component, OnInit, ViewChild, DoCheck, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { Store } from '@ngrx/store';
import { AuthState } from './state/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit, AfterViewChecked {

  name = '';
  title = 'app';
  flag = true;
  message = 'Hello World';
  isLoggedIn = false;

  // @ViewChild(UserListComponent)
  // private userList: UserListComponent;

  constructor(private store: Store<AuthState>, private cdRef: ChangeDetectorRef) {
    this.store.select('isLoggedIn').subscribe((isLogged) => {
      if (isLogged !== undefined) {
        this.isLoggedIn = isLogged;
      }
    });
  }
  ngOnInit() {
    // this.userList.selectedUserCountRadioButton = 'all';
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  change() {
    this.message = 'Changed world';
  }


}
