import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EserviceService {
 baseURL:string="http://localhost:9001/api/";
constructor(private http:HttpClient) { }


 storeData(emp:any){
   console.log(emp);
  return  this.http.post(this.baseURL+"save",emp,{responseType:'text'});
 }

 updateData(emp:any){
   console.log(emp);
   return this.http.put(this.baseURL+"update",emp,{responseType:'text'});
 }

 getData(){
   return this.http.get(this.baseURL+"employees");
 }
}
