import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
              private activatedRoute:ActivatedRoute,
              private location:Location) { }

  employee:Employee;


  ngOnInit() {
    this.getEmployee(this.idEmployee);
  }

  idEmployee = +this.activatedRoute.snapshot.paramMap.get('id');
  
  getEmployee(idEmployee):void{ 
    this.employeeService.getEmployee(idEmployee).subscribe(employeeDetail => this.employee = employeeDetail);
  }
  
  goBack(){
    this.location.back();
  }
  onSubmit(value){
    this.employee.department.id = value.department;
    this.employee.department.departmentName = "";
    this.employeeService.updateEmployee(this.employee).subscribe(() => this.goBack());
  }

}
