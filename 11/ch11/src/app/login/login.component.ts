import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  loginButton(username,password){
    var username=username.value;
    var password=password.value;
    this.authservice.login();
    this.authservice.userNameis=username;
    this.router.navigate(['jobs']);
    console.log(this.authservice.userNameis);
  }
}
