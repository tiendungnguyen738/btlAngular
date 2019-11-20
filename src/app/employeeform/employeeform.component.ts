import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Department } from '../Department';
import { DepartmentServiceService } from '../department-service.service';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  constructor(private departmentService:DepartmentServiceService,
              private formBuilder:FormBuilder) { 
  }

  formEmployee = this.formBuilder.group({
    empName:['',Validators.required],
    empDob:[''],
    empSex:[''],
    empNumberInsurance:[''],
    empAddress:[''],
    empPhone:[''],
    empType:[''],
    department:['']
  });
  ngOnInit() {
    this.getDepartments();
  }

  departmentArray: Department[];

  getDepartments():void{
     this.departmentService.getAllDepartment().subscribe(departments =>this.departmentArray = departments);
  }
  save(emp){
    console.log(emp);
  }
  
}
