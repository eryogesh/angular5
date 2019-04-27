import { Component, OnInit, ViewChild } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  flag = true;
  message = 'Hello World';

  @ViewChild(UserListComponent)
  private userList: UserListComponent;

  ngOnInit() {
    this.userList.selectedUserCountRadioButton = 'all';
  }

  change() {
    this.message = 'Changed world';
  }


}
