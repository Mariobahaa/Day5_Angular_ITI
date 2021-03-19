import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmpdetailsComponent } from './components/empdetails/empdetails.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule}  from '@angular/common/http';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmpdetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
