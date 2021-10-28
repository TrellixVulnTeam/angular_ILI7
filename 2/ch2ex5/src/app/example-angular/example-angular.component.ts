import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'example-angular',
  templateUrl: './example-angular.component.html',
  styleUrls: ['./example-angular.component.css']
})
export class ExampleAngularComponent implements OnInit {
  arr = [];
  valueName='';
  btnDisable=false;
  constructor() { }

  ngOnInit(): void {
  }
  name: string = "Tulesh";

  greet(): void {
      alert("Hello " + this.name);
  };

  btnenable(event: Event) {
    
    this.valueName=(<HTMLInputElement>event.target).value;
      this.btnDisable=true;
     
    
  }

  btnclick(event: Event)
  {
    
    this.arr.push(this.valueName);
    console.log(this.arr);
  }
  btnreset(){
    this.valueName='';
    console.log(this.arr);
    this.arr=[];
  }
}
