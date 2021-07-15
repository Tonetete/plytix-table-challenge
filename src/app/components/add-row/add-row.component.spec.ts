import Swal from 'sweetalert2';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import { AsPipe } from '../../pipes/as-pipe.pipe';
import { UsersService } from '../../services/users.service';

import { AddRowComponent } from './add-row.component';

class FakeUsersService {
  static subject = new Subject();

  createUser(formData: any) {
    return FakeUsersService.subject.asObservable();
  }

  emitUserCreated(value: any) {
    console.log('emit', value);
  }
}

describe('AddRowComponent', () => {
  let component: AddRowComponent;
  let fixture: ComponentFixture<AddRowComponent>;

  beforeEach(async () => {
    // @ts-ignore
    spyOn(Swal, 'fire').and.callFake(() => true);
    await TestBed.configureTestingModule({
      declarations: [AddRowComponent, AsPipe],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: FormBuilder, useClass: FormBuilder },
        { provide: UsersService, useClass: FakeUsersService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('WHEN type on fields THEN should valid fields', () => {
    const { name, email, department } = component.userForm.controls;

    name.setValue('username');
    email.setValue('email@email.com');
    department.setValue('Marketing');

    fixture.detectChanges();

    expect(name.valid).toBe(true);
    expect(email.valid).toBe(true);
    expect(department.valid).toBe(true);

    email.setValue('');
    department.setValue('');

    fixture.detectChanges();

    expect(email.valid).toBe(false);
    expect(department.valid).toBe(false);
  });

  it('WHEN type on fields and click on save THEN should save user', () => {
    spyOn(FakeUsersService.prototype, 'emitUserCreated');
    const addModalRow = jasmine.createSpyObj('addModalRow', ['closeModal']);
    component.addModalRow = addModalRow;

    const { name, email, department } = component.userForm.controls;
    const saveButton = fixture.nativeElement.querySelector('#button-submit');

    expect(saveButton.disabled).toBe(true);

    name.setValue('username');
    email.setValue('email@email.com');
    department.setValue('Marketing');

    fixture.detectChanges();

    expect(saveButton.disabled).toBe(false);

    saveButton.click();

    const formValues = { ...component.userForm.value };

    FakeUsersService.subject.next(component.userForm.value);

    fixture.detectChanges();

    expect(addModalRow.closeModal).toHaveBeenCalled();
    expect(FakeUsersService.prototype.emitUserCreated).toHaveBeenCalledWith({
      ...formValues,
    });
    expect(name.value).toBe(null);
    expect(email.value).toBe(null);
    expect(department.value).toBe(null);
  });

  it('WHEN call showAddRowModal THEN should display modal', () => {
    const addModalRow = jasmine.createSpyObj('addModalRow', ['showModal']);

    component.addModalRow = addModalRow;
    component.showAddRowModal();

    expect(addModalRow.showModal).toHaveBeenCalled();
  });

  it('WHEN call resetForm THEN should reset userForm', () => {
    const { name, email, department } = component.userForm.controls;

    name.setValue('username');
    email.setValue('email@email.com');
    department.setValue('Marketing');

    component.resetForm();

    expect(name.value).toBe(null);
    expect(email.value).toBe(null);
    expect(department.value).toBe(null);
  });
});
