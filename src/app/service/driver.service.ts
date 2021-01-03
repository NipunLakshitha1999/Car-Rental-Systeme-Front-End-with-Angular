import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import driverDTO from '../dto/driverDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private http:HttpClient
  ) { }

  public saveDriver(userDTO: driverDTO): Observable<any>{
    alert("driver save fire")
    return this.http.post('http://localhost:8080/Car_Rental/api/v1/driver/saveDriver',{
      driverEmail:userDTO.driverEmail,
      driverCode:userDTO.driverCode,
      driverName:userDTO.driverName,
      driverAddress:userDTO.diverAddress,
      driverContact:userDTO.diverContact,
      status:userDTO.status
    })
  }

  public driverLogin(userDTO: driverDTO): Observable<any>{
    alert("driver login fire");
    return this.http.post('http://localhost:8080/Car_Rental/api/v1/driver',{
      driverEmail:userDTO.driverEmail,
      driverCode:userDTO.driverCode
    })
  }

  public getAllDriverShedule(email:string):Observable<any>{
    return this.http.get('http://localhost:8080/Car_Rental/api/v1/driver/shedule',{params:{email}})
  }
}
