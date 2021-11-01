import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students = [
    {name:"Vivek",school: "Modi",date:"	Mon Nov 01 2021 14:52:28 GMT+0530 (India Standard Time)"} ,
    {name:"Tulesh",school: "sarvodaya",date:"Mon Nov 01 2021 14:52:36 GMT+0530 (India Standard Time)"}
  ]
  constructor() { }

  addStudent(studentname,schoolname,logintime) {
    this.students.push({name:studentname,school:schoolname,date:logintime});
    console.log(studentname,schoolname,logintime);
  }
}
