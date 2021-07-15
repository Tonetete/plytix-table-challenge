import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { environment } from '../../environments/environment';
import { users } from '../fixtures/users.fixtures';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const base_url = environment.base_api_url;

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('WHEN call getUsers THEN should call api and return a list of users', () => {
    service.getUsers().subscribe(({ users, ok }) => {
      expect(users.length).toBe(4);
      expect(ok).toBe(true);
    });

    const req = httpMock.expectOne(`${base_url}`);
    expect(req.request.method).toBe('GET');
    req.flush({ users, ok: true });
  });

  it('WHEN call createUser THEN should call api and create and return the user', () => {
    const user = {
      id: 1,
      name: 'user1',
      email: 'user1@mail.com',
      created: '2010-10-01',
      department: 'Marketing',
    };

    service.createUser(user).subscribe((response) => {
      expect(response).toEqual(user);
    });

    const req = httpMock.expectOne(`${base_url}`);
    expect(req.request.method).toBe('POST');
    req.flush(user);
  });

  it('WHEN call createUser THEN should call api and create and return the user', () => {
    const user = {
      id: 1,
      name: 'user1',
      email: 'user1@mail.com',
      created: '2010-10-01',
      department: 'Marketing',
    };

    service.createUser(user).subscribe((user) => {
      expect(users.length).toBe(4);
    });

    const req = httpMock.expectOne(`${base_url}`);
    expect(req.request.method).toBe('POST');
    req.flush(user);
  });

  it('WHEN call updateUser THEN should call api and update and return the user', () => {
    const user = {
      id: 1,
      name: 'user1',
      email: 'user1@mail.com',
      created: '2010-10-01',
      department: 'Marketing',
    };

    service.updateUser(user).subscribe((response) => {
      expect(response.name).toBe('user1Edited');
    });

    const req = httpMock.expectOne(`${base_url}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush({ ...user, name: 'user1Edited' });
  });

  it('WHEN call deleteUser THEN should call api and delete the user', () => {
    const user = {
      id: 1,
      name: 'user1',
      email: 'user1@mail.com',
      created: '2010-10-01',
      department: 'Marketing',
    };

    service.deleteUser(user).subscribe((response) => {
      expect(response).toBeFalsy();
    });

    const req = httpMock.expectOne(`${base_url}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('WHEN call getUserCreatedSubsription THEN should return observable', () => {
    const userCreatedSubscription = service.getUserCreatedSubsription();

    expect(userCreatedSubscription instanceof Observable).toBe(true);
  });

  it('WHEN call emitUserCreated THEN subscription should return value', () => {
    const user = {
      id: 1,
      name: 'user1',
      email: 'user1@mail.com',
      created: '2010-10-01',
      department: 'Marketing',
    };

    const userCreatedSubscription = service.getUserCreatedSubsription();

    userCreatedSubscription.subscribe((value) => {
      expect(value).toEqual(user);
    });

    service.emitUserCreated(user);
  });

  it('WHEN call transformUsers THEN should return an instance of users', () => {
    const usersTransformed = service.transformUsers(users);

    expect(usersTransformed.every((user) => user instanceof User)).toBeTrue();
  });
});
