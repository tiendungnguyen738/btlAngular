import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  private employeeUrl = "http://localhost:8080/aht/api/employee";
  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
 
  //get all employee
  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.employeeUrl);
  }

  //get a employee
  getEmployee(id:number):Observable<Employee>{
    const urlGetEmployee = this.employeeUrl+'/'+id;
    return this.httpClient.get<Employee>(urlGetEmployee);
  }

  //edit employee
  updateEmployee(employee:Employee):Observable<any>{
    return this.httpClient.put(this.employeeUrl,employee,this.httpOptions);
  }
}
