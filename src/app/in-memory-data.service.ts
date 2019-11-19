import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Employee} from './Employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const employees = [
      { id:1,
        empName:'tiến dũng',
        empDob:'10-11-2019',
        empSex:1,
        empNumberInsurance:123,
        empAddress:'Hà Nội',
        empPhone:'09230923',
        empType:1
      },
      { id:2,
        empName:'tiến quân',
        empDob:'10-11-1998',
        empSex:1,
        empNumberInsurance:234,
        empAddress:'Khánh Hòa',
        empPhone:'0923232',
        empType:2},
      { id:3,
        empName:'rooney',
        empDob:'10-11-1993',
        empSex:1,
        empNumberInsurance:111,
        empAddress:'HCM',
        empPhone:'092332323',
        empType:1}
    ];
    return {employees};
  }
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
}
