import Swal from 'sweetalert2';

import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Field } from '../../interfaces/field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss'],
})
export class AddRowComponent implements OnInit {
  @ViewChild('addRowModal') addModalRow!: ModalComponent;

  public addRowFields: Field[] = [
    { label: 'name', type: 'text', value: '' },
    { label: 'email', type: 'text', value: '' },
    {
      label: 'department',
      type: 'select',
      value: ['Marketing', 'Development'],
    },
  ];
  public userForm!: FormGroup;

  constructor(
    private formBuidler: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuidler.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
    });
  }

  checkValidInput(label: string) {
    return (
      this.userForm.controls[label].invalid &&
      (this.userForm.controls[label].touched ||
        this.userForm.controls[label].dirty)
    );
  }

  resetForm = () => {
    this.userForm.reset();
  };

  saveUser() {
    if (!this.userForm.invalid) {
      this.usersService
        .createUser(this.userForm.value)
        .subscribe((response: User) => {
          this.addModalRow.closeModal();
          this.userForm.reset();
          this.usersService.emitUserCreated(response);
          Swal.fire('Row added', `User ${response.name} added`, 'success');
        });
    }
  }

  showAddRowModal() {
    this.addModalRow.showModal();
  }
}
