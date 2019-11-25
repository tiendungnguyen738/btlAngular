import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { Location} from '@angular/common'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService,
              private location:Location) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees():void{
    this.employeeService.getEmployees().subscribe(employeesArray => this.employees = employeesArray);
  }

  deleteEmp(employee: Employee):void{
    if(window.confirm("you sure ???"))
    {
      this.employees = this.employees.filter(nhanvien => nhanvien !== employee);
      this.employeeService.deleteEmployee(employee).subscribe();
    }
  }
}
