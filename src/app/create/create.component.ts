import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee_frontend } from '../employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private service : EmployeeService, private route :Router){}
  ngOnInit(): void{}
  emp:Employee_frontend=new Employee_frontend();
 
  onsubmit(){
    this.service.postvalue(this.emp).subscribe(
      data=>{
        console.log(data),
        this.gotoEmplist();
      },
      err=>console.error(err)
    );
  }
  gotoEmplist(){
    this.route.navigate(['list']);  
  }

}

