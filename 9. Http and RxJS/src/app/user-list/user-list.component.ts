import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }


  getAllUsersCount(): number {
    return this.users.length;
  }
  getAllMaleUsersCount(): number {
    return this.users.filter(x => x.gender === 'male').length;
  }
  getAllFemaleUsersCount(): number {
    return this.users.filter(x => x.gender === 'female').length;
  }

  onUserCountRadioButtonChange(selectedValue: string): void {
    console.log(selectedValue);
    this.selectedUserCountRadioButton = selectedValue;
  }

}
