import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[EmpdataService]
})
export class UsersComponent implements OnInit {

  constructor(private empdata: EmpdataService) { }
  userdata:any;
  data;

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.empdata.getData().subscribe(data=>this.userdata=data);

  }
  
}
