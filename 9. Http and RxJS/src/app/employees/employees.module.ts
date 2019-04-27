import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeeListComponent, EmployeeDetailsComponent]
})
export class EmployeesModule { }
