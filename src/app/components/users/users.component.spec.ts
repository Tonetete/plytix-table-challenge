import Swal from 'sweetalert2';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, Subject, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { users } from '../../fixtures/users.fixtures';
import { UsersComponent } from './users.component';
import { AsPipe } from 'src/app/pipes/as-pipe.pipe';
import { User } from 'src/app/models/user.model';
import { startWith } from 'rxjs/operators';

class FakeUsersService {
  static subjectgetUsers = new Subject();
  static subjectUserCreatedSubsription = new Subject();
  static subjectUpdateUser = new Subject();
  static subjectDeleteUser = new Subject();

  getUsers(formData: any) {
    return FakeUsersService.subjectgetUsers.asObservable();
  }

  getUserCreatedSubsription(formData: any) {
    return FakeUsersService.subjectUserCreatedSubsription.asObservable();
  }

  updateUser(user: User, index: number) {
    return FakeUsersService.subjectUpdateUser
      .asObservable()
      .pipe(startWith(user));
  }

  deleteUser(user: User) {
    const usersModified = users.filter((item) => item.id !== user.id);
    FakeUsersService.subjectgetUsers.next({ users: usersModified, ok: true });
    return FakeUsersService.subjectDeleteUser
      .asObservable()
      .pipe(startWith('deleted'));
  }

  emitUserCreated(value: any) {
    console.log('emit', value);
  }
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, AsPipe],
      imports: [BrowserAnimationsModule],
      providers: [{ provide: UsersService, useClass: FakeUsersService }],
    }).compileComponents();
  });

  beforeEach(() => {
    // @ts-ignore
    spyOn(Swal, 'fire').and.callFake(() => true);
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    FakeUsersService.subjectgetUsers.next({ users, ok: true });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.users.length).toBe(4);
  });

  it('WHEN call deleteUser THEN should call user service to remove it and update users', () => {
    const removeModalRow = jasmine.createSpyObj('removeModalRow', [
      'showModal',
      'closeModal',
    ]);
    component.removeModalRow = removeModalRow;

    const deleteButton = fixture.nativeElement.querySelector(
      '[data-original-title="Delete"]'
    );

    deleteButton.click();
    fixture.detectChanges();

    expect(removeModalRow.showModal).toHaveBeenCalled();
    expect(component.pendingDeleteUser).toEqual(users[0]);

    component.deleteUser();

    fixture.detectChanges();

    expect(removeModalRow.pendingDeleteUser).toBeFalsy();
    expect(component.users.length).toBe(3);
  });

  it('WHEN call edit action user THEN should change row index edit', () => {
    const editActionButton = fixture.nativeElement.querySelector(
      '[data-original-title="Edit Action"]'
    );

    editActionButton.click();

    fixture.detectChanges();

    expect(component.rowIndexEdit).toBe(0);
  });

  it('WHEN call setEdit THEN should edit user and modify users', () => {
    const user = { ...users[0] };
    user.name = 'user1Edited';
    component.editUser(user, 0);

    fixture.detectChanges();

    expect(component.users[0].name).toBe(user.name);
  });

  it('WHEN call setEdit THEN should edit user and modify users', () => {
    spyOn(FakeUsersService.prototype, 'updateUser').and.returnValue(
      throwError('error')
    );

    const user = { ...users[0] };
    user.name = 'user1Edited';
    component.editUser(user, 0);

    fixture.detectChanges();

    expect(Swal.fire).toHaveBeenCalledWith(
      'Error',
      `There was an error editing the user`,
      'error'
    );
  });
});
