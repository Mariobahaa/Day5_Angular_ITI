import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService{

  constructor(private httpClient:HttpClient) {
    this.baseURL = "http://localhost:1998/employees";
  }

  baseURL;

  getEmps(){
      return this.httpClient.get(this.baseURL, {observe:"response"});
      
  }

  getEmp(id){
    return this.httpClient.get(this.baseURL + `/${id}`, {observe:"response"});
    
}
  
}
