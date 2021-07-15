import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Department } from '../../interfaces/department';
import { GetUsersResponse } from '../../interfaces/responses';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Expertise, User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

import { loadingAnimation } from 'src/app/animations/loading.animation';
import { differenceDate } from 'src/app/helpers/date';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
  animations: [loadingAnimation()],
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  public faUser = faUser;
  public searchDevelopmentKeyWord: string = '';
  public searchMarketingKeyWord: string = '';
  public users: User[] = [];
  public userCreatedSubscription!: Subscription;
  public usersSubscription!: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersSubscription = this.getUsers().subscribe(({ users, ok }) => {
      if (ok) {
        this.users = users.map(this.setUserExpertise);
      }
    });
    this.userCreatedSubscription = this.usersService
      .getUserCreatedSubsription()
      .subscribe((response) => {
        this.users = [...this.users, this.setUserExpertise(response)];
      });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
    this.userCreatedSubscription.unsubscribe();
  }

  setUserExpertise(user: User): User {
    let expertise = 'Experienced' as Expertise;

    const days = differenceDate(user.created);
    if (days > 1 && days <= 2) {
      expertise = 'Advanced';
    } else if (days > 2 && days <= 3) {
      expertise = 'Senior';
    } else if (days >= 4) {
      expertise = 'Expert';
    }

    return { ...user, expertise };
  }

  getUsers(): Observable<GetUsersResponse> {
    return this.usersService.getUsers();
  }

  searchUsers(value: string, department: Department) {
    if (department === 'Marketing') {
      this.searchMarketingKeyWord = value;
    } else {
      this.searchDevelopmentKeyWord = value;
    }
  }
}
