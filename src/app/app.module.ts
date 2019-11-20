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

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeformComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation :false}),
    ReactiveFormsModule
  ],
  providers: [EmployeeService,DepartmentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
