import { Subject } from "rxjs";
import { Employee } from "./employee.model";

export class employeeService{
    employee : Employee[] = [];
    employeeAdd = new Subject;
    // employeeAdd = new Subject<Employee[]>();
  
    addEmployee(employee: Employee){
      this.employee.push(employee);
      this.employeeAdd.next(this.employee);
    }
}