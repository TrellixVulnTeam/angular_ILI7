import { Subject } from "rxjs";
import { Employee } from "./employee.model";

export class employeeService{
    employee : Employee[] = [];
    employeeAdded = new Subject<Employee[]>();
  
    addEmployee(employee: Employee){
      this.employee.push(employee);
      this.employeeAdded.next(this.employee);
    }
}