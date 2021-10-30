import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.setBg();
   }
   setBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // randomColor="#"+randomColor;
    // document.body.style.backgroundColor = "#" + randomColor;
    // color.innerHTML = "#" + randomColor;
    console.log(randomColor)
    return '#'+randomColor;
  }
  
}
