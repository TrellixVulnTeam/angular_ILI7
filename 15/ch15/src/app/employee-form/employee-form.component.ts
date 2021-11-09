import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { employeeService } from '../employee.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private employeeService:employeeService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w+.?\s[A-Z]\w+.?$/)]),
      'company': new FormControl(null, Validators.required),
      'area': new FormControl('area1', Validators.required),
      'mobilenumber': new FormControl(null, [Validators.required, Validators.pattern(/^\+\d{3}-\d{2}-\d{3}/)]),
      'isNewToCompany': new FormControl('yes'),
      'gender': new FormGroup({
        'male': new FormControl(),
        'female': new FormControl()
      })
    })
  }

  onEmployeFormSubmit(){

  }

}
