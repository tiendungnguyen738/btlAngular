import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Department } from '../Department';
import { DepartmentServiceService } from '../department-service.service';
import { Validators} from '@angular/forms';
import { Location} from '@angular/common';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  constructor(private departmentService:DepartmentServiceService,
              private location:Location) { 
  }

  ngOnInit() {
    this.getDepartments();
  }

  employee:Employee;
  departmentArray: Department[];

  getDepartments():void{
     this.departmentService.getAllDepartment().subscribe(departments =>this.departmentArray = departments);
  }
  goBack(){
    this.location.back();
  }
  onSubmit(employeeform){
    console.log(employeeform);
  }
}
