import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { DepartmentServiceService } from '../department-service.service';
import { Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  constructor(private departmentService:DepartmentServiceService,
              private location:Location,
              private employeeService:EmployeeService) { 
  }
  
  gioitinh="1";
  ngOnInit() {
    this.getDepartments();
  }
  department:Department={id:0,departmentName:""}
  departmentArray: Department[];

  getDepartments():void{
     this.departmentService.getAllDepartment().subscribe(departments =>this.departmentArray = departments);
  }
  goBack(){
    this.location.back();
  }
  
  //add new employee
  onSubmit(formEmployee){
    formEmployee.department = +formEmployee.department;
    this.department.id = formEmployee.department;
    formEmployee.department = this.department;
    this.employeeService.addNewEmployee(formEmployee).subscribe(() => this.goBack());
  }
}
