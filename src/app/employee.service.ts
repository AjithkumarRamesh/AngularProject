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
  getEmplist():Observable<Employee_frontend[]>{
    return this.http.get<Employee_frontend[]>(`${this.basurl}`);
  }
  deleteById(id:number):Observable<object>{
    return this.http.delete(`${this.basurl}/${id}`);
  }
  getById(id:number):Observable<Employee_frontend>{
    return this.http.get<Employee_frontend>(`${this.basurl}/${id}`);
  }
  updateEmp(id:number,emp:Employee_frontend):Observable<object>{
    return this.http.put(`${this.basurl}/${id}`,emp);
  }

}
