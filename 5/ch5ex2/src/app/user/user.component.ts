import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() userAdded=new EventEmitter<any>();

  message = 'Hola Mundo!';
  @ViewChild('countryName') countryName:ElementRef;
  constructor() { }
  // user={
  //   firstname:'',
  //   familyName:'',
  //   countryName:''
  // }
  ngOnInit(): void {
  }
  addFromData(firstname,formfamilyName)
  {
    let user={
      firstname:'',
      familyName:'',
      countryName:''
    }
    user.firstname=firstname.value;
    user.familyName=formfamilyName.value;
    user.countryName=this.countryName.nativeElement.value;
    this.userAdded.emit(user);
    firstname.value='';
    formfamilyName.value='';
    this.countryName.nativeElement.value='';
    
    // console.log(this.user);
  }
}
