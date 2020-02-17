import { Injectable } from '@angular/core';
import { Iemployee } from './iemployee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  constructor(private http: HttpClient) {

  }
  employeeList:Iemployee[]=[
    {code:'101',name:'yash101',gender:'Male',annualSalary:50000,dateOfBirth:'01/2/2022'},
    {code:'102',name:'yash102',gender:'Female',annualSalary:50000,dateOfBirth:'02/20/2019'},
    {code:'103',name:'yash103',gender:'Female',annualSalary:50000,dateOfBirth:'02/20/2019'},
    {code:'104',name:'yash104',gender:'Male',annualSalary:50000,dateOfBirth:'11/02/2017'},
    {code:'105',name:'yash105',gender:'Male',annualSalary:50000,dateOfBirth:'11/02/2017'},
    {code:'106',name:'yash106',gender:'Female',annualSalary:50000,dateOfBirth:'9/11/2020'}
  ];
  getEmpList():Iemployee[]{
    return this.employeeList;
  }

  baseUrl:"http://localhost:5000/users/get";

  getData(){
    const httpOptions = {
      headers: new HttpHeaders({ 
          'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin':this.baseUrl
      })
    };
    console.log("call services");

        return this.http.get("http://localhost:5000/users/get",httpOptions);
        // return this.http.get("https://jsonplaceholder.typicode.com/users");
  } 


}
