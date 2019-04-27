import { Component, OnInit, ViewChild } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  name = '';
  title = 'app';
  flag = true;
  message = 'Hello World';

  // @ViewChild(UserListComponent)
  // private userList: UserListComponent;

  ngOnInit() {
    // this.userList.selectedUserCountRadioButton = 'all';
  }

  change() {
    this.message = 'Changed world';
  }


}
