import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  constructor( private Service: ServiceService) {
  }
  emps; 
  subscribtion;

  ngOnInit(): void {
    this.subscribtion = this.Service.getEmps().subscribe(
        (res)=>{
          if(res.status == 200)
          {
            this.emps = res.body;
          }
        },
        (err)=>{console.error(err.message)}
    )
    }
  ngOnDestroy():void{
    this.subscribtion.unsubscribe();
  }
  

  

}
