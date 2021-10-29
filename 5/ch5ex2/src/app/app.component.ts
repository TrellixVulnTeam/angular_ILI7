import { Component } from '@angular/core';
// import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  // users=[];
  isShow = false;
  


  // title = 'ch5';
  // addFromData(firstname,formfamilyName)
  // {
    
  //   this.firstname=firstname.value;
  //   this.familyName=formfamilyName.value;
  //   this.countryName=this.countryName.nativeElement.value;
  //   /*this.users.push(this.firstname,this.familyName,this.countryName)*/
  //    console.log(this.firstname,this.familyName,this.countryName,this.users);
  // }
 
  onUserAdd(user)
  {
    this.isShow = true;
    console.log(user);
    this.user = user;
    // this.users.push(userTemp);
    // console.log(this.users);
  }
}
