import Swal from 'sweetalert2';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {
  faTimes,
  faCheck,
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';

import { User } from '../../models/user.model';
import { GetUsersResponse } from '../../interfaces/responses';
import { UsersService } from '../../services/users.service';
import { Field } from '../../interfaces/field';
import { ModalComponent } from '../modal/modal.component';

import { loadingAnimation } from 'src/app/animations/loading.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [loadingAnimation()],
})
export class UsersComponent implements OnInit, OnDestroy {
  @ViewChild('removeRowModal') removeModalRow!: ModalComponent;

  public addRowFields: Field[] = [
    { label: 'name', type: 'text', value: '' },
    { label: 'email', type: 'text', value: '' },
    {
      label: 'department',
      type: 'select',
      value: ['Marketing', 'Development'],
    },
  ];
  public removeRowFieldsDisplay: Field[] = [];

  public faCheck = faCheck;
  public faCancel = faTimes;
  public faPencilAlt = faPencilAlt;
  public faTrashAlt = faTrashAlt;
  public loading: boolean = false;
  public pendingDeleteUser: User | null = null;
  public rowIndexEdit: number = -1;
  public users: User[] = [];
  public userCreatedSubscription!: Subscription;
  public usersSubscription!: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersSubscription = this.getUsers().subscribe(({ users, ok }) => {
      if (ok) {
        this.users = [...users];
      }
    });
    this.userCreatedSubscription = this.usersService
      .getUserCreatedSubsription()
      .subscribe((response) => {
        this.users = [...this.users, response];
      });
  }

  ngOnDestroy(): void {
    this.userCreatedSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
  }

  getUsers(): Observable<GetUsersResponse> {
    return this.usersService.getUsers();
  }

  deleteUser() {
    if (this.pendingDeleteUser) {
      this.usersService.deleteUser(this.pendingDeleteUser).subscribe(() => {
        Swal.fire(
          'Row removed',
          `User ${this.pendingDeleteUser?.name} added`,
          'success'
        );
        this.ngOnInit();
        this.pendingDeleteUser = null;
        this.removeModalRow.closeModal();
      });
    }
  }

  editUser(user: User, index: number) {
    this.usersService.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);

        this.users[index] = response;
        this.cancelEditRow();
        Swal.fire('Changes saved', `User ${user.name} edited`, 'success');
      },
      (err) => {
        Swal.fire('Error', `There was an error editing the user`, 'error');
      }
    );
  }

  setEditRow(index: number) {
    this.rowIndexEdit = index;
  }

  cancelEditRow() {
    this.rowIndexEdit = -1;
  }

  showRemoveRowModal() {
    this.removeModalRow.showModal();
  }

  showRemoveUserModal(user: User) {
    this.removeRowFieldsDisplay = [...this.addRowFields];

    const userFields = Object.keys(user);

    this.removeRowFieldsDisplay.forEach((item) => {
      userFields.find((field: string) => {
        if (field === item.label && field !== 'department') {
          item.value = user[field];
        }
      });
    });

    this.removeRowFieldsDisplay[2].selectedValue = user.department;
    this.pendingDeleteUser = user;

    this.showRemoveRowModal();
  }

  validateEmail(email: string) {
    const regularExpression =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }
}
