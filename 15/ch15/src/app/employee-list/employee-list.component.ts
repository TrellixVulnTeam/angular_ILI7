import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../employee.model';
import { employeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeRecords:Employee[];
  subsc;
  // subsc:Subscription;

  constructor(private employeeservice:employeeService) { }

  ngOnInit(): void {
    this.subsc = this.employeeservice.employeeAdd.subscribe(
      (employees: Employee[]) => {
        this.employeeRecords = employees;
      }
    )
  }

}
