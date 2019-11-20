import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup,FormControl} from '@angular/forms';
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
  formEmployee = new FormGroup({
    id : new FormControl(''),
    empName : new FormControl(''),
    empDob : new FormControl(''),
    empSex : new FormControl(''),
    empNumberInsurance : new FormControl(''),
    empAddress : new FormControl(''),
    empPhone : new FormControl(''),
    empType: new FormControl(''),
    department:new FormControl('')
  });
  onSubmit(nv){
  //  this.employeeService.updateEmployee(nv).subscribe();
   console.log(this.employee);
  }
  save():void{
    // this.employeeService.updateEmployee(this.employee).subscribe(()=>this.goBack());
  }
}
