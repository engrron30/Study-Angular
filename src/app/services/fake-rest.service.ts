import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface User {
  id: number;
  userName: string;
  password: string;
}

export interface Activity {
  id: number;
  title: string;
  dueDate: string;
  completed: boolean;
}

export interface UserSearchFilter {
  statusList: number[];
}

@Injectable({
  providedIn: 'root'
})

export class FakeRestService {
  private readonly baseUrl = 'https://fakerestapi.azurewebsites.net/api/v1';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/Users`);
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.baseUrl}/Activities`);
  }

  searchUsers(filter: UserSearchFilter, pageIndex: number, pageSize: number): Observable<User[]> {
    return this.getUsers().pipe(
      map((users) => {
        const filteredUsers = users.filter((user) => filter.statusList.includes(user.id));
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        return filteredUsers.slice(start, end);
      })
    );
  }
}
