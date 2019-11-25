import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent} from './employees/employees.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ListtrainingComponent } from './listtraining/listtraining.component';
import { TrainingformComponent } from './trainingform/trainingform.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';

const routes: Routes = [
  { path: 'employees',component:EmployeesComponent},
  { path: 'add-employee', component:EmployeeformComponent},
  { path: 'employee-detail/:id',component:EmployeeDetailsComponent},
  { path: 'trainings', component:ListtrainingComponent},
  { path: 'add-training', component:TrainingformComponent},
  { path: 'training-detail/:id',component:TrainingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
