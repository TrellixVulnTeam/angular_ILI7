import { Component, Input, OnChanges, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() currentUser;
  constructor() { }
  userAdminComparr=[];



  ngOnInit(): void {
    
  }

  onUserAdd(user){
    console.log(user.firstname);
    this.userAdminComparr.push(user);
    console.log(this.userAdminComparr);
  }
}
