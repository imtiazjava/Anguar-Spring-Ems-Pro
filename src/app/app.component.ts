import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EserviceService } from './eservice.service';
import { Employee } from './employee';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eid:number;
  ename:string="";
  esalary:number;
  emp:Employee;
  msg:string;
  flag:boolean=false;
  constructor(private mservice:EserviceService){}

  storeD(data1){
    console.log(data1.value);
    this.eid=data1.value.eid;
    this.ename=data1.value.ename;
    this.esalary=data1.value.esalary;
    this.emp =new Employee(this.eid,this.ename,this.esalary);
    this.mservice.storeData(this.emp)
    .subscribe(data=>{
      console.log(data)
      this.msg=data;
      this.flag=true;

    })
    data1.form.reset();
  }
}
