import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from './Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private httpClient:HttpClient) { }

  private urlDepartment  = "http://localhost:8080/aht/api/departments";

  //get all department
  getAllDepartment():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.urlDepartment);
  }
}
