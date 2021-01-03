import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import RentDetail from '../dto/rentDetailDTO';
import {$} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AdminSignInService {

  constructor(
    private http: HttpClient
  ) { }

  // @ts-ignore
  public getAllCustomerRequest():Observable<any>{
    return this.http.get('http://localhost:8080/Car_Rental/api/v1/rentMiniCar');
  }

  public getAllDrivers():Observable<any>{
    return this.http.get('http://localhost:8080/Car_Rental/api/v1/driver')
  }


  addRentDetail(userDTO: RentDetail):Observable<any> {
    return this.http.post('http://localhost:8080/Car_Rental/api/v1/RentDetail/inputDetail',{
      tour:Number(userDTO.tour),
      rentid:Number(userDTO.rentid),
      driverid:userDTO.driverid
    })
  }

  public getAllMiniCars(): Observable<any> {
    return this.http.get('http://localhost:8080/Car_Rental/api/v1/addCar/miniCar')
  }

  public getAllRentDetail():Observable<any> {
    return this.http.get('http://localhost:8080/Car_Rental/api/v1/RentDetail')
  }

  public searchCar(regno: string):Observable<any> {
    return this.http.get('http://localhost:8080/Car_Rental/api/v1/addCar?',{params:{regno}});
  }
}
