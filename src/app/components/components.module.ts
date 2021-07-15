import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddRowComponent } from './add-row/add-row.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import { UsersComponent } from './users/users.component';

import { AsPipe } from '../pipes/as-pipe.pipe';
import { DepartmentPipe } from '../pipes/department.pipe';
import { FilterByNameEmailPipe } from '../pipes/filter-by-name-email.pipe';

@NgModule({
  declarations: [
    AddRowComponent,
    DepartmentsComponent,
    ModalComponent,
    ToggleViewComponent,
    UsersComponent,
    AsPipe,
    DepartmentPipe,
    FilterByNameEmailPipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddRowComponent,
    DepartmentsComponent,
    ModalComponent,
    ToggleViewComponent,
    UsersComponent,
  ],
})
export class ComponentsModule {}
