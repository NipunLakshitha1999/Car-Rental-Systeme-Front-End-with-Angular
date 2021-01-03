import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import customerDTO from '../dto/customerDTO';
import {Observable} from 'rxjs';
import customerLoginDTO from '../dto/customerLoginDTO';
import RentDTO from '../dto/addRentDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) {
  }

  cusEmail:string;
  public registerCustomer(userDTO: customerDTO): Observable<any> {
    return this.http.post('http://localhost:8080/Car_Rental/api/v1/customer', {
      email: userDTO.getemail(),
      nic: userDTO.getnic(),
      lisenNo: userDTO.getlisenNo(),
      name: userDTO.getname(),
      address: userDTO.getaddress(),
      contact: Number(userDTO.getcontact()),
      password: userDTO.getpssword()
    });
  }

  public loginCustomer(userDTO:customerLoginDTO):Observable<any>{
    this.cusEmail = userDTO.email;
    return this.http.post('http://localhost:8080/Car_Rental/api/v1/customer/signIn',{
      email:userDTO.email,
      password:userDTO.password
    })
  }

  rentMiniCar(userDTO: RentDTO):Observable<any> {
      return this.http.post('http://localhost:8080/Car_Rental/api/v1/rentMiniCar',{
        carregno:userDTO.carregno,
        cardate:userDTO.cardate,
        cartime:userDTO.cardiver,
        cardiver:userDTO.cardiver,
        cusemail:userDTO.cusemail
      })
  }
}
