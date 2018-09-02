import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate():  boolean {
    return this.isAuthenticated();
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('access-token');
    if (token === null || token === undefined) {
      this.router.navigate(['/sign-in']);
      return false;
    } else {
      return true;
    }
  }
}
