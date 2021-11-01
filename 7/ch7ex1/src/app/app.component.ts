import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myObject =[
    {colour:'red',text:'1'},
    {colour:'blue',text:'2'},
    {colour:'black',text:'3'},
    {colour:'green',text:'4'}
  ]
   
  title = 'ch7';
  ngForTrackBy()
  {

  }
}
