import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../iemployee';
import { EmpdataService } from '../empdata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmpdataService]
})
export class EmployeeComponent implements OnInit {
  employeeList:Iemployee[];
  constructor(private empdata: EmpdataService) {
  }
  ngOnInit() {
    this.employeeList=this.empdata.getEmpList();
    
  }

}
