import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'filterByNameEmail',
})
export class FilterByNameEmailPipe implements PipeTransform {
  transform(users: User[], searchKeyWord: string): User[] {
    if (searchKeyWord !== '') {
      return users.filter(
        (user) =>
          user.name.includes(searchKeyWord) ||
          user.email.includes(searchKeyWord)
      );
    }
    return users;
  }
}
