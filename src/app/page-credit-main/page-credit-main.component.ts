import { Component, OnInit } from '@angular/core';
import { Activity, FakeRestService, User } from '../services/fake-rest.service';

interface UserView {
  userId: number;
  mobile: string;
}

interface ActivityView {
  id: number;
  title: string;
}

@Component({
  selector: 'app-page-credit-main',
  templateUrl: './page-credit-main.component.html',
  styleUrls: ['./page-credit-main.component.scss']
})
export class PageCreditMainComponent implements OnInit {
  title = 'Credit';
  searchFilter = { statusList: [1, 9, 2, 3, 5] };
  actyList: ActivityView[] = [];
  userList: UserView[] = [];
  errorMessage = '';

  constructor(private fakeRestService: FakeRestService) {}

  ngOnInit(): void {
    this.fakeRestService.getActivities().subscribe({
      next: (activities) => {
        this.actyList = activities.slice(0, 5).map((activity: Activity) => ({
          id: activity.id,
          title: activity.title
        }));
      },
      error: () => {
        this.errorMessage = 'Failed to load activities from FakeRest API.';
      }
    });

    this.fakeRestService.searchUsers(this.searchFilter, 0, 10).subscribe({
      next: (users) => {
        this.userList = users.map((user: User) => ({
          userId: user.id,
          mobile: `08${String(user.id).padStart(8, '0')}`
        }));
      },
      error: () => {
        this.errorMessage = 'Failed to load users from FakeRest API.';
      }
    });
  }

}
