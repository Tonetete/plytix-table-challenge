import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

const base_url = environment.base_api_url;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private $userCreated: Subject<User> = new Subject();
  constructor(private http: HttpClient) {}

  transformUsers(results: any[]): User[] {
    return results.map((user) => {
      const { id, name, email, department, created } = user;
      return new User(id, name, email, department, created);
    });
  }

  getUsers() {
    return this.http.get<User[]>(`${base_url}`).pipe(
      map(
        (response: any) => ({
          ok: true,
          users: this.transformUsers(response),
        }),
        catchError(async (err) => ({ ok: false, error: err }))
      )
    );
  }

  createUser(formData: User) {
    const created = new Date();

    return this.http.post<User>(`${base_url}`, { ...formData, created });
  }

  updateUser(data: User) {
    return this.http.put<User>(`${base_url}/${data.id}`, { ...data });
  }

  deleteUser(data: User) {
    return this.http.delete(`${base_url}/${data.id}`);
  }

  getUserCreatedSubsription() {
    return this.$userCreated.asObservable();
  }

  emitUserCreated(user: User) {
    this.$userCreated.next(user);
  }
}
