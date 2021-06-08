import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = 'http://localhost:5000/api';
  readonly Photos = 'http://localhost:5000/Photos';

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/departments');
  }
  addDepartment(val:any)
  {
    return this.http.post<any>(this.APIurl+'/departments',val);
  }
  updateDepartment(val:any)
  {
    return this.http.put<any>(this.APIurl+'/departments',val);
  }
  deleteDepartment(val:any)
  {
    return this.http.delete<any>(this.APIurl+'/departments/'+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/employee');
  }
  addEmployee(val:any)
  {
    return this.http.post<any>(this.APIurl+'/employee',val);
  }
  updateEmployee(val:any)
  {
    return this.http.put<any>(this.APIurl+'/employee',val);
  }
  deleteEmployee(val:any)
  {
    return this.http.delete<any>(this.APIurl+'/employee/'+val);
  }
  uploadPhoto(val:any)
  {
    return this.http.post<any>(this.APIurl+'/employee/SaveFile',val);
  }
  getAllDepartmentsName()
  {
    return this.http.get<any>(this.APIurl+'/employee/GetAllDepartmentsName');
  }

  getNevermind():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/nevermind');
  }
  addNevermind(val:any)
  {
    return this.http.post<any>(this.APIurl+'/nevermind',val);
  }
  updateNevermind(val:any)
  {
    return this.http.put<any>(this.APIurl+'/nevermind',val);
  }
  deleteNevermind(val:any)
  {
    return this.http.delete<any>(this.APIurl+'/nevermind/'+val);
  }


  
}
