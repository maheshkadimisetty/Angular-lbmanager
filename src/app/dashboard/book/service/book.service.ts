import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Book} from '../addbook/createbook'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private  httpClient:  HttpClient) {}
  allbooks(){
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.get(`https://lbmanager-node.herokuapp.com/api/book/listAllBooks`,httpOptions);
  }
  addbook(Book){
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.post(`https://lbmanager-node.herokuapp.com/api/book/create`,Book,httpOptions);
  }
}
