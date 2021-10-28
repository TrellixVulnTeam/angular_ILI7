import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-angular',
  templateUrl: './example-angular.component.html',
  styleUrls: ['./example-angular.component.css']
})
export class ExampleAngularComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "Tulesh";

  greet(): void {
      alert("Hello " + this.name);
  };

}
