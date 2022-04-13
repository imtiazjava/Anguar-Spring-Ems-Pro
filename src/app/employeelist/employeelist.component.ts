import { Component, OnInit } from '@angular/core';
import { EserviceService } from '../eservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
   employees:any=[];
  constructor(private service:EserviceService) { }

  ngOnInit() {
    this.service.getData().subscribe(data=>{
      this.employees=data;
    })
  }

}
