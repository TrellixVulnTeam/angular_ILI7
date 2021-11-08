import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  setusername:string="aaa";
  constructor(private authservice:AuthService,private router:Router) {
    console.log(this.setusername);
   }

  ngOnInit(): void {
    
    // this.setusername=this.authservice.userNameis;
  }
  ngOnChanges():void{
    this.setusername=this.authservice.userNameis;
    console.log(this.setusername);
  }
  setusernameload(){
    this.setusername=this.authservice.userNameis;
  }

}
