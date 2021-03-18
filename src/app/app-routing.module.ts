import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from "./components/employees/employees.component"
import {EmpdetailsComponent} from "./components/empdetails/empdetails.component"
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: "", redirectTo: "employees",  pathMatch:"full"},
  {path: "employees", component: EmployeesComponent,  pathMatch:"full" },
  {path: "employees/:id", component: EmpdetailsComponent,  pathMatch:"full"},
  {path: "**", component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
