import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee_frontend } from '../employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:number;
  emp:Employee_frontend=new Employee_frontend();
  constructor(private service:EmployeeService,private route:Router,private aroute : ActivatedRoute){}
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
  onsubmit(){
    this.service.updateEmp(this.id,this.emp).subscribe(
      data=>{
        console.log(data);
        this.gotoEmplist();
      },
      err=>console.error(err)
    );
  }
  gotoEmplist(){
    this.route.navigate(['list']);
  }

}
