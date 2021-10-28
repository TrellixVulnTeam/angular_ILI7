import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-example',
  template: `
  <p id="p1">hii </p>
  <p id="p2"> How are you</p>
  <p id="p3">I am fine</p>`,
  styles : [`
    #p1{
      color: red;
    }
    #p2{
      color: blue;
    }
    #p3{
      color: aqua;
    }
  `]
})
export class UserExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
