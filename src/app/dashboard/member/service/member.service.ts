import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private  httpClient:  HttpClient) {}
  allMembers() {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.get(`https://lbmanager-node.herokuapp.com/api/member/listAllMembers`, httpOptions);
  }
  createMember(Member) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.post(`https://lbmanager-node.herokuapp.com/api/member/create`, Member, httpOptions);
  }
  deleteMember(Member) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.post(`https://lbmanager-node.herokuapp.com/api/member/delete`, Member, httpOptions);
  }
  updateMember(Member) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.post(`https://lbmanager-node.herokuapp.com/api/member/update`, Member, httpOptions);
  }
  fetchMember(memberId) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.post(`https://lbmanager-node.herokuapp.com/api/member/fetch`, memberId, httpOptions);
  }
  fetchIssuedBooks(memberID) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.get(`https://lbmanager-node.herokuapp.com/api/bookIssue/fetchIssueBookDetails/` + memberID, httpOptions);
  }
  payFine(member) {
    const token = localStorage.getItem('access-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token':  token
      })
    };
    return  this.httpClient.post(`https://lbmanager-node.herokuapp.com/api/member/collectFine`, member, httpOptions);
  }
}
