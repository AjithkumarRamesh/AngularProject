import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee_frontend } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http :HttpClient) { }
  basurl="http://localhost:8080/employee"
  postvalue(emp:Employee_frontend):Observable<object>{
    return this.http.post(`${this.basurl}`,emp);
  }
}
