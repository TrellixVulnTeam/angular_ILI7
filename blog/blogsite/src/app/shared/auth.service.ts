import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './Model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser = new Subject<string>();
  isLogin: boolean = false;
  loginUserNameOrEmail = '';

  constructor(private router: Router) { }

  login(user: User) {
    this.isLogin = true;
    if (user.username) {
      this.loginUserNameOrEmail = user.username;
      localStorage.setItem('token_name', user.username);
      console.log(" Localstorage save : " + localStorage.getItem('token_name'));
    } else {
      this.loginUserNameOrEmail = user.email;
    }
    this.loginUser.next(this.loginUserNameOrEmail);
  }

  getLoginDetail() {
    if (localStorage.getItem("token_name")) {
      this.loginUserNameOrEmail = localStorage.getItem("token_name");
      this.loginUser.next(this.loginUserNameOrEmail);
      this.isLogin = true;
    }
  }

  getAuthStatus(): boolean {
    return this.isLogin;
  }

  getUserNameOrEmail() {
    return this.loginUserNameOrEmail;
  }

  logout() {
    this.loginUserNameOrEmail = '';
    this.isLogin = false;
    this.loginUser.next(this.loginUserNameOrEmail);
    localStorage.removeItem('token_name');
    this.router.navigate(['/blog/']);
  }
}
