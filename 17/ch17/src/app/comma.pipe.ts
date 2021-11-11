import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(val:string):string[] {
  //   let val1='this are the components'
  //   return val1.split(','+"aa");
  // }
  transform(value:any,limit:number){
    
      // value.split(' ');
        return value.split(' ')+" ";
   
}
}
