import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { DepartmentPipe } from 'src/app/pipes/department.pipe';
import { FilterByNameEmailPipe } from 'src/app/pipes/filter-by-name-email.pipe';
import { UsersService } from 'src/app/services/users.service';
import { users } from '../../fixtures/users.fixtures';
import { DepartmentsComponent } from './departments.component';

class FakeUsersService {
  static subjectgetUsers = new Subject();
  static subjectUserCreatedSubsription = new Subject();

  getUsers(formData: any) {
    return FakeUsersService.subjectgetUsers.asObservable();
  }

  getUserCreatedSubsription(formData: any) {
    return FakeUsersService.subjectUserCreatedSubsription.asObservable();
  }

  emitUserCreated(value: any) {
    console.log('emit', value);
  }
}

describe('DepartmentsComponent', () => {
  let component: DepartmentsComponent;
  let fixture: ComponentFixture<DepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DepartmentsComponent,
        FilterByNameEmailPipe,
        DepartmentPipe,
      ],
      imports: [BrowserAnimationsModule],
      providers: [{ provide: UsersService, useClass: FakeUsersService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    FakeUsersService.subjectgetUsers.next({ users, ok: true });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.users.length).toBe(4);
  });

  it('WHEN search users by marketing THEN should filter users by that department', () => {
    const searchValue = 'user3';

    let usersFound = fixture.debugElement.queryAll(
      By.css('#marketing .h-100 h5')
    );

    expect(usersFound.length).toBe(2);

    component.searchUsers(searchValue, 'Marketing');
    fixture.detectChanges();

    usersFound = fixture.debugElement.queryAll(By.css('#marketing .h-100 h5'));

    expect(usersFound.length).toBe(1);
  });

  it('WHEN search users by development THEN should filter users by that department', () => {
    const searchValue = 'user2';

    let usersFound = fixture.debugElement.queryAll(
      By.css('#marketing .h-100 h5')
    );

    expect(usersFound.length).toBe(2);

    component.searchUsers(searchValue, 'Development');
    fixture.detectChanges();

    usersFound = fixture.debugElement.queryAll(
      By.css('#development .h-100 h5')
    );

    expect(usersFound.length).toBe(1);
  });

  it('WHEN there is a new user created THEN should fire userCreatedSubscription with the new user', () => {
    expect(component.users.length).toBe(4);

    FakeUsersService.subjectUserCreatedSubsription.next({
      id: 5,
      name: 'user5',
      email: 'user5@mail.com',
      created: new Date(),
    });
    fixture.detectChanges();

    expect(component.users.length).toBe(5);
    expect(component.users[component.users.length - 1].expertise).toBe(
      'Experienced'
    );
  });
});
