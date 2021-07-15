import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'department',
})
export class DepartmentPipe implements PipeTransform {
  transform(users: User[], filterValue: string): User[] {
    return users.filter((item) => item.department === filterValue);
  }
}
