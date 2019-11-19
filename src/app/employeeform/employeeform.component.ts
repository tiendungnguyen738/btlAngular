import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  form: FormGroup;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      empTypeeee: new FormControl('')
    });
  }

}
