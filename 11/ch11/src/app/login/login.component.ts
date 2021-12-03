import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router: Router,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }
  loginButton(username,password){
    var username=username.value;
    var password=password.value;
    if(!password.trim() || !username.trim()){
      alert("Pleaase enter value !");
      return;
    }
    this.authservice.login();
    this.authservice.userNameis=username;
    this.router.navigate(['jobs']);
    const oneuser = {name: username, password: password};
    this.loginService.User(oneuser);
    console.log(this.authservice.userNameis);
  }
}
