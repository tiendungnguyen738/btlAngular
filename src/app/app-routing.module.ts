import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent} from './employees/employees.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  { path: 'employees',component:EmployeesComponent},
  { path: 'add-employee', component:EmployeeformComponent},
  { path: 'employee-detail/:id',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
