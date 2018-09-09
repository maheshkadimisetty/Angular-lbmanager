import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  allUsers() {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    };
    return this.httpClient.get(
      `https://lbmanager-node.herokuapp.com/api/user/listUsers`,
      httpOptions
    );
  }
  createUser(User) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    };
    return this.httpClient.post(
      `https://lbmanager-node.herokuapp.com/api/user/create`,
      User,
      httpOptions
    );
  }
  deleteUser(User) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    };
    return this.httpClient.post(
      `https://lbmanager-node.herokuapp.com/api/user/delete`,
      User,
      httpOptions
    );
  }
  updateUser(User) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': token
      })
    };
    return this.httpClient.post(
      `https://lbmanager-node.herokuapp.com/api/user/update`,
      User,
      httpOptions
    );
  }
}
