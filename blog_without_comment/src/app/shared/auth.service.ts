import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUser = new Subject<string>();
  isLogin: boolean = false;
  loginUserNameOrEmail = 'tulesh.g@prominentpixel.com';
  isLoading = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  login(user: User) {
    this.isLoading = true;
    this.isLogin = true;
    if (user.username) {
      this.loginUserNameOrEmail = user.username;
      localStorage.setItem('token_name', 'user.username');
      console.log(localStorage.setItem('token_name', user.username));
      this.isLoading = false;
    } else {
      this.loginUserNameOrEmail = user.email;
      this.isLoading = false;
    }

    this.loginUser.next(this.loginUserNameOrEmail);
  }
  getAuthStatus(): boolean {
    return this.isLogin;
  }

  getUserNameOrEmail() {
    return this.loginUserNameOrEmail;
  }

  logOut() {
    this.loginUserNameOrEmail = '';
    this.isLogin = false;
    this.loginUser.next(this.loginUserNameOrEmail);
    localStorage.removeItem('token_name');
    console.log(this.router.url);
    console.log(this.route.params);
    if (this.route.snapshot.queryParams.fragment == 'edit') {
      this.router.navigate(['/blog/']);
      alert('please login firstss');
    }

    this.router.navigate(['/blog/']);
  }
}
