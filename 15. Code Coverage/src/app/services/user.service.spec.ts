import { TestBed, getTestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ResponseOptions } from '@angular/http';

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [UserService]
    });
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([UserService], (uservice: UserService) => {
    expect(uservice).toBeTruthy();
  }));

  it('should return an Observable<User[]>',
    () => {
      const dummyUsers = [
        {  'id': 1,
        'name': 'Leanne graham',
        'username': 'Bret',
        'gender': 'male',
        'email': 'Sincere@april.biz',
        'phone': '1-770-736-8031 x56442' }
      ];

      service.getUsers().subscribe(users => {
        expect(users.length).toBe(1);
        expect(users).toEqual(dummyUsers);
      });

      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);

      // service.getUsers().subscribe(res => {
      //   expect(res).not.toBeNull();
      //   expect(res[0]).not.toBeNull();
      //   expect(res[0].id).toEqual(1);
      //   expect(res[0].name).toEqual('Leanne graham');
      // });

    });


});
