import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public auth: AuthService) {
  }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/sign-in']);
      return false;
    }
    return true;
  }
  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem('access-token');
  //   if (token === null || token === undefined) {
  //     this.router.navigate(['/sign-in']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}
