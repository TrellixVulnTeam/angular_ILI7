import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student1:object;
  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.student1=this.studentsService.students;
    console.log(this.student1);
  }

}
