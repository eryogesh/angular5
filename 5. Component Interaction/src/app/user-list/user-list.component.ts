import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: any = [];
  selectedUserCountRadioButton: string;


  constructor() { 
    this.users = [
      {
        'id': 1,
        'name': 'Leanne graham',
        'username': 'Bret',
        'gender': 'male',
        'email': 'Sincere@april.biz',
        'phone': '1-770-736-8031 x56442',
      },
      {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'gender': 'male',
        'email': 'Shanna@melissa.tv',
        'phone': '010-692-6593 x09125',
      },
      {
        'id': 3,
        'name': 'Clementine bauch',
        'username': 'Samantha',
        'gender': 'female',
        'email': 'Nathan@yesenia.net',
        'phone': '1-463-123-4447',
      },
      {
        'id': 4,
        'name': 'patricia Lebsack',
        'username': 'Karianne',
        'gender': 'female',
        'email': 'Julianne.OConner@kory.org',
        'phone': '493-170-9623 x156',
      },
      {
        'id': 5,
        'name': 'chelsey Dietrich',
        'username': 'Kamren',
        'gender': 'female',
        'email': 'Lucio_Hettinger@annie.ca',
        'phone': '(254)954-1289',
      }
    ];
  
  }

  ngOnInit() {
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
