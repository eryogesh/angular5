import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IUserShort } from '../models/user-short';
import { AppState, UsersLoadedAction } from '../state/user.reducer';

@Injectable()
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  public loadUsers(): void {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Check');

    this.http.get(this.url, { headers: headers })
      .subscribe((users: IUserShort[]) => {
        this.store.dispatch(new UsersLoadedAction(users));
      });
  }

  getUsers() {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Check');

    return this.http.get<IUserShort[]>(this.url, {
      headers: headers
    });
  }

  // getUsers(): Array<IUserShort> {
  //   return [
  //     {
  //       'id': 1,
  //       'name': 'Leanne graham',
  //       'username': 'Bret',
  //       'gender': 'male',
  //       'email': 'Sincere@april.biz',
  //       'phone': '1-770-736-8031 x56442',
  //     },
  //     {
  //       'id': 2,
  //       'name': 'Ervin Howell',
  //       'username': 'Antonette',
  //       'gender': 'male',
  //       'email': 'Shanna@melissa.tv',
  //       'phone': '010-692-6593 x09125',
  //     },
  //     {
  //       'id': 3,
  //       'name': 'Clementine bauch',
  //       'username': 'Samantha',
  //       'gender': 'female',
  //       'email': 'Nathan@yesenia.net',
  //       'phone': '1-463-123-4447',
  //     },
  //     {
  //       'id': 4,
  //       'name': 'patricia Lebsack',
  //       'username': 'Karianne',
  //       'gender': 'female',
  //       'email': 'Julianne.OConner@kory.org',
  //       'phone': '493-170-9623 x156',
  //     },
  //     {
  //       'id': 5,
  //       'name': 'chelsey Dietrich',
  //       'username': 'Kamren',
  //       'gender': 'female',
  //       'email': 'Lucio_Hettinger@annie.ca',
  //       'phone': '(254)954-1289',
  //     }
  //   ];
  // }

}
