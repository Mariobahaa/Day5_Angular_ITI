import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit, OnDestroy {

  id;
  employee;
  subscribtion;
  constructor(private activeLink: ActivatedRoute,private Service:ServiceService) { 
      this.id = activeLink.snapshot.params.id;
  }

  ngOnInit(): void {
    this.subscribtion = this.Service.getEmp(this.id).subscribe(
      (res)=>{
        if(res.status == 200)
        {
          this.employee = res.body;
        }
      },
      (err)=>{console.error(err.message);}
    );
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
