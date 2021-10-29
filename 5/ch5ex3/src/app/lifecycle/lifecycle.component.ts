import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  @ViewChild('myname', {static: true}) header: ElementRef;
  @ContentChild('paragraph1') paragraph: ElementRef;
  constructor() { }
  name='Tulesh';

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges running....');
  //   console.log(changes);
  // }
  button1Click()
  {
    this.name='Ghelani'
  }

  ngOnInit() {
    console.log('ngOnInit running....');
    console.log('Heading Conetent: ' +this.header.nativeElement.textContent);
    
    // console.log('paragraph : '+this.paragraph.nativeElement.textContent);
    
  }

  ngDoCheck() {
    console.log('ngDoCheck running....');

    console.log('Heading Conetent: ' +this.header.nativeElement.textContent); 
    // console.log('paragraph : '+this.paragraph.nativeElement.textContent);
    
 
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit running....');
    // console.log('paragraph : '+this.paragraph.nativeElement.textContent);
    
    
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked running....');
    console.log('Heading Conetent: ' +this.header.nativeElement.textContent);
    
    // console.log('paragraph : '+this.paragraph.nativeElement.textContent);
 
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit running....');
    // console.log('Heading Conetent: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked running....');
    console.log('Heading Conetent: ' +this.header.nativeElement.textContent);
    // console.log('paragraph : '+this.paragraph.nativeElement.textContent);
 
  }

  ngOnDestroy() {
    console.log('ngOnDestroy running....');
    console.log('paragraph : '+this.paragraph.nativeElement.textContent);
 
  }
  

}
