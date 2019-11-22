import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Validators} from '@angular/forms';
import { DepartmentServiceService } from '../department-service.service';
import { Department} from '../Department';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private location:Location,
              private departmentService:DepartmentServiceService) { }

  employee:Employee;
  departments:Department[];

  ngOnInit() {
    this.getEmployee(this.idEmployee);
    this.getAllDepartments();
  }
  
  //get employee
  idEmployee = +this.activatedRoute.snapshot.paramMap.get('id');
  getEmployee(idEmployee):void{ 
    this.employeeService.getEmployee(idEmployee).subscribe(employeeDetail => this.employee = employeeDetail);
  }
  
  //get list department
  getAllDepartments():void{
    this.departmentService.getAllDepartment().subscribe(departmentArray => this.departments = departmentArray);
  }

  goBack(){
    this.location.back();
  }

  //edit employee
  onSubmit(value){
    this.employee.department.id = value.department;
    this.employee.department.departmentName = "";
    this.employeeService.updateEmployee(this.employee).subscribe(() => this.goBack());
  }

}
