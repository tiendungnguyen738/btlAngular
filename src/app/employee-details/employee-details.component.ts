import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
  gioitinh:string;
 

  ngOnInit() {
    this.getEmployee(this.idEmployee);
    this.getAllDepartments();
  }
  
  //get employee
  idEmployee = +this.activatedRoute.snapshot.paramMap.get('id');
  getEmployee(idEmployee):void{ 
    this.employeeService.getEmployee(idEmployee).subscribe(employeeDetail => this.employee = employeeDetail);
    this.employeeService.getEmployee(idEmployee).subscribe(employeeDetail => this.gioitinh = employeeDetail.empSex.toString());
  }
  
  //get list department
  getAllDepartments():void{
    this.departmentService.getAllDepartment().subscribe(departmentArray => this.departments = departmentArray);
  }

  goBack(){
    this.location.back();
  }

  department:Department={id:0,departmentName:""}
  //edit employee
  onSubmit(value){
    value.department = +value.department;
    this.department.id = value.department;
    value.department = this.department;
    this.employeeService.updateEmployee(value).subscribe(() => this.goBack());
  }

}
