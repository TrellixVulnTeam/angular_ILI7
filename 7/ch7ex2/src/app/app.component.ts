import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() public myObject =[
    {colour:'red',text:'1'},
    {colour:'blue',text:'2'},
    {colour:'white',text:'3'},
    {colour:'green',text:'4'}
  ]
   
  title = 'ch7';
  ngForTrackBy()
  {

  }
}
