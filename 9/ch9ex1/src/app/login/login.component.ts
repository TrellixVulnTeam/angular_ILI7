import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
  }
  addStudentData(studentName,School)
  {
    let studentname='';
    let schoolname='';
    let logintime=new Date();
    console.log(logintime);
    studentname=studentName.value;
    schoolname=School.value;
    console.log(studentname);
    console.log(schoolname);
    this.studentsService.addStudent(studentname,schoolname,logintime);
  }
}
