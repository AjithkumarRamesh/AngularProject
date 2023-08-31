import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee_frontend } from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private service:EmployeeService,private route:Router,private aroute:ActivatedRoute){}
  id:number;
  emp:Employee_frontend=new Employee_frontend();
  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    this.service.getById(this.id).subscribe(
      data=>{
        this.emp=data;
        console.log(data);
      },
      err=>console.error(err)
    );
  }


}
