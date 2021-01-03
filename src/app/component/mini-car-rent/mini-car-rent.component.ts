import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminSignInService} from '../../service/admin-sign-in.service';
import CarDTO from '../../dto/carDTO';
import {CustomerService} from '../../service/customer.service';
import RentDTO from '../../dto/addRentDTO';

@Component({
  selector: 'app-mini-car-rent',
  templateUrl: './mini-car-rent.component.html',
  styleUrls: ['./mini-car-rent.component.css']
})
export class MiniCarRentComponent implements OnInit {

  constructor(
    private router:ActivatedRoute,
    private adminSignInService:AdminSignInService,
    private customerService:CustomerService
  ) { }


  myDataSet:CarDTO[]=[];
  rentCustomerEmail: string;
  rentCarRegNo: string;
  rentDate: '';
  rentTime: '';
  rentDriver: '';
  ngOnInit(): void {
    this.loadAllMiniCars();
  }

  loadAllMiniCars():void{
    this.rentCustomerEmail = this.customerService.cusEmail;
    this.adminSignInService.getAllMiniCars().subscribe(result =>{
      console.log(result);
      this.myDataSet=result.data;
    })
  }


  selectCar(no: string) {
    this.rentCarRegNo=no;
  }

  addRent() {
    const rent=new RentDTO(
      this.rentCarRegNo.trim(),
      this.rentDate.trim(),
      this.rentTime.trim(),
      this.rentDriver.trim(),
      this.rentCustomerEmail.trim()
    );
    this.customerService.rentMiniCar(rent).subscribe(result =>{
      if (result.code == 200){
        alert("RENT ADDED SUCCESS FULL");
      }else {
        alert("RENT ADDED FAILED");
      }
    })
  }
}
