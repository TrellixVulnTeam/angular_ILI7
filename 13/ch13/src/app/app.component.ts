import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'ch13';
  private firstObsSubscription:Subscription;
  array1:string[]=['aa00','bb11','cc22','dd33','ee44','ff55','gg66','hh77','ii88'];
  
  ngOnInit(){
    const customObservation =Observable.create(observer=>{
      let randomnumber = this.array1[Math.floor(Math.random()*9)];
      // for(let a1 of this.array1)
      // {
      //   console.log(a1);
      //   setInterval(()=>{
      //     if(a1=='dd'){
      //       observer
      //     }
      //   })
      // }
      setInterval(()=>{
        observer.next(randomnumber);
        
        if(randomnumber==this.array1[7]){
          observer.complete();
        }
        if(randomnumber==this.array1[3]){
          observer.error(new Error('do not use this.'));
        }
        randomnumber = this.array1[Math.floor(Math.random()*9)];
      },100);
    })

    this.firstObsSubscription=customObservation.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }
}
