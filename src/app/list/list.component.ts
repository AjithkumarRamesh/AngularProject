import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';
import { Employee_frontend } from '../employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(private service:EmployeeService,private route:Router){}
  employees:Employee_frontend[];
  ngOnInit(): void {
    this.getEmplist();
  }
  getEmplist(){
    this.service.getEmplist().subscribe(
      data=>{
        this.employees=data;
        console.log(data);
      },
      err=>console.error(err)
    );
  }
 
  delete(id:number){
    this.service.deleteById(id).subscribe(
      data=>{
        console.log(data);
        alert("Data Deleted successfully");
        this.getEmplist();
      },
      err=>console.error(err)
    );
  }
  update(id:number){
    this.route.navigate(['update',id]);
  }
  view(id:number){
    this.route.navigate(['view',id]);
  }
  

}
