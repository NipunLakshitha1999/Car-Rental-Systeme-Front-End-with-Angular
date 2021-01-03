import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import adminDTO from '../dto/adminDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }


  public loginUser(userDTO: adminDTO): Observable<any>{
    console.log(userDTO.password)
    return this.http.post('http://localhost:8080/Car_Rental/api/v1/adminSignIn', {
      email: userDTO.email,
      passowrd:userDTO.password
    });

  }
}
