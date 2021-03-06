import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { EmployeeService } from './employee.service';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { ReactiveFormsModule} from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentServiceService } from './department-service.service';
import { FormsModule} from '@angular/forms';
import { ListtrainingComponent } from './listtraining/listtraining.component';
import { TrainingService } from './training.service';
import { TrainingformComponent } from './trainingform/trainingform.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeformComponent,
    EmployeeDetailsComponent,
    ListtrainingComponent,
    TrainingformComponent,
    TrainingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation :false}),
    ReactiveFormsModule
  ],
  providers: [EmployeeService,DepartmentServiceService,TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
