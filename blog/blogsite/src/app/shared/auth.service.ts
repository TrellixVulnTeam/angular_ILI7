import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser = new Subject<string>();
  isLogin:boolean=false;
  loginUserNameOrEmail='';
  currentUserId: number=0;

  constructor() { }

  login(user:User){
    this.isLogin=true;
    if(user.username){
      this.loginUserNameOrEmail=user.username;
    }
    else{
      this.loginUserNameOrEmail=user.email;
    }

    this.loginUser.next(this.loginUserNameOrEmail);
    this.currentUserId++;
  }

  getAuthStatus(): boolean {
    return this.isLogin;
  }

  getUserNameOrEmail(){
    return this.loginUserNameOrEmail;
  }
}
