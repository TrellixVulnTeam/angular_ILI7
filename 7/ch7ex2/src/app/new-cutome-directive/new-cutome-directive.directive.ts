import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Directive, ElementRef, HostBinding, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appNewCutomeDirective]'
})
export class NewCutomeDirectiveDirective implements OnInit  {
  @Input() myObject:any;

  @Input() defaultColor: string="red";
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('textContent') text: string;
  constructor(el: ElementRef) {
    
    // el.nativeElement.style.backgroundColor = this.defaultColor;
   }
   ngOnInit(){
     console.log(this.myObject);
    
    this.backgroundColor=this.myObject.colour;
    this.text=this.myObject.text;
    // this.defaultColor="cyan";
  }

}
