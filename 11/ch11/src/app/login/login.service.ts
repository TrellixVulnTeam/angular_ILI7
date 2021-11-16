import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: {name: string, password: string};
  LoggedIn: boolean = false;
  userCreated = new EventEmitter<{ name: string; password: string; }>();
  
  constructor(private authService:AuthService) { }

  User(user: {name: string, password: string}){
    this.currentUser = user;
    this.LoggedIn = true;
    this.userCreated.emit(this.currentUser);
    this.authService.login();
  }


}
