import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-loigin',
  templateUrl: './loigin.component.html',
  styleUrls: ['./loigin.component.css']
})
export class LoiginComponent implements OnInit {

  constructor() { }
formdata;
  ngOnInit() {
    this.formdata=new FormGroup({
   username: new FormControl("",Validators.compose([
     Validators.required,
     Validators.minLength(6)
   ])),
password:new FormControl("",this.passwordvalidation)

    });
  }

  passwordvalidation(formcontrol){
    if(formcontrol.value.length <5 ){
      return {
        "password": true
      };
    }
  }

  onClickSubmit(data){
    if(data.username=="yashyash" && data.password=="admin123"){
alert("login Sucess")
    }else{
      alert("log in fail")
    }
     
  }

}
