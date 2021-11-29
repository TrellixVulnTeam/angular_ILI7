import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  setusername:string;
  constructor(private authservice:AuthService,private router:Router,
    private loginService:LoginService) {
    // console.log(this.setusername);
   }

  ngOnInit(): void {
    this.loginService.userCreated.subscribe(
      (user) => {
        this.setusername = user.name;
      }
    )
    console.log(this.setusername);
    // this.setusername=this.authservice.userNameis;
  }

  ngOnChanges():void{
    // this.setusername=this.authservice.userNameis;
    // console.log(this.setusername);
    // console.log(this.setusername);
    // this.loginService.userCreated.subscribe(
    //   (user) => {
    //     this.setusername = user.name;
    //   }
    // )
  }
  setusernameload(){
    // this.setusername=this.authservice.userNameis;
  }

}
