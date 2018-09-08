import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private httpClient: HttpClient) {}
  loginUser(user) {
    return this.httpClient.post(`https://lbmanager-node.herokuapp.com/user/login`, user);
  }
}
