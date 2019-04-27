import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { UserService } from '../services/user.service';
import { AppState, selectUsers } from '../state/user.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: any = [];
  selectedUserCountRadioButton: string;
  today = new Date();
  filterBy = '';

  constructor(private userService: UserService, private store: Store<AppState>) {
    this.users = this.store.select('users');
    this.userService.loadUsers();
  }

  ngOnInit() {
    // this.userService.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }


  // getAllUsersCount(): number {
  //   return this.users.length;
  // }
  // getAllMaleUsersCount(): number {
  //   return this.users.filter(x => x.gender === 'male').length;
  // }
  // getAllFemaleUsersCount(): number {
  //   return this.users.filter(x => x.gender === 'female').length;
  // }

  onUserCountRadioButtonChange(selectedValue: string): void {
    console.log(selectedValue);
    this.selectedUserCountRadioButton = selectedValue;
  }

}
