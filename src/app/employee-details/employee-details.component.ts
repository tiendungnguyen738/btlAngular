import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  }

  getEmployee():void{
    const idEmployee = +this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(idEmployee).subscribe(employeeDetail => this.employee = employeeDetail);
  }
}
