import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminSignInService} from '../../service/admin-sign-in.service';
import RentCarDetailDTO from '../../dto/rentCarDetailDTO';
import DriverDTO from '../../dto/driverDTO';
import RentDetail from '../../dto/rentDetailDTO';
import RentDetailDTO from '../../dto/getRentDetailDTO';
import RentDetailSetDTO from '../../dto/rentDetailSetDTO';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router:Router,
    private adminSignInService:AdminSignInService
  ) { }

  selectRent:RentCarDetailDTO=null;
  selectDriverID:DriverDTO=null;
  myDataSet: RentCarDetailDTO[] = [];
  myDriverData: DriverDTO[] = [];
  myRentDetailData:RentDetailSetDTO[]=[];
  rentIDToRentDetail: '';
  rentIDToPaymentSearch: string;
  carIDToPaymentSearch: string;
  carIDToPayment: '';
  tourToPayment: '';
  freeMIlageDayToPayment: '';
  feeMilageMonthToPayment: '';
  priceForKmToPayment:'';
  priceForDayToPayment: '';
  priceForMonthToPayment: '';
  rentDateToPayment: '';
  handOverDateToPayment: '';
  balanceTopayment: '';
  driverIDToRentDetail: '';
  carIDToRentDetail: '';
  kmToRentDetail: '';
  updateDriverStatues: '';

  ngOnInit(): void {
    this.loadAllCustomerRequest();
    this.loadAllDrivers();
    this.loadAllRentDetails();
  }


  public loadAllCustomerRequest():void{

    this.adminSignInService.getAllCustomerRequest().subscribe(result=>{
      console.log(result.data)
      this.myDataSet = result.data;
    })
  }



  deleteRequest(rentid: string) {

  }

  public loadAllDrivers():void{
    this.adminSignInService.getAllDrivers().subscribe(result =>{
      console.log(result.data)
      this.myDriverData=result.data;
    })
  }


  addDriver() {
   // @ts-ignore
    alert("button fire")
    this.router.navigate(['/addDriver'])
  }

  acceptRequest(tempCustomer: RentCarDetailDTO) {
  // @ts-ignore
    this.selectRent = tempCustomer;
  }

  selectDriver(tempDriver: DriverDTO) {
    this.selectDriverID=tempDriver;
  }

  public addrentDetail():void {
    let detail=new RentDetail(
      this.kmToRentDetail.trim(),
      this.selectRent.rentid,
      this.selectDriverID.driverEmail
    )
  console.log(detail);
    this.adminSignInService.addRentDetail(detail).subscribe(result=>{
      if (result.code == 200){
        alert("RENT SUCCESS");
      }else {
        alert("RENT FAILED");
      }
    })
  }

  public loadAllRentDetails():void{
    this.adminSignInService.getAllRentDetail().subscribe(result =>{
      console.log(result);
    this.myRentDetailData=result.data;
    })
  }

  addPayment(rentDetailid: string, rentCarRegNo: string,km:string,driver:string) {
    this.rentIDToPaymentSearch=rentDetailid;
    this.carIDToPaymentSearch=rentCarRegNo;
    // @ts-ignore
    this.tourToPayment=km;

    if (driver === 'null'){
      // @ts-ignore
      this.updateDriverStatues='no';
    }else {

    }
  }

  public search():void {
    this.adminSignInService.searchCar(this.carIDToPaymentSearch).subscribe(result =>{
      console.log(result)
      this.carIDToPayment=result.data.carregno;
      this.freeMIlageDayToPayment=result.data.carFreeMilageFDay;
      this.feeMilageMonthToPayment=result.data.carFreeMilageFMonth;
      this.priceForKmToPayment=result.data.carPriceFExKM;
      this.priceForDayToPayment=result.data.carPriceFRentDaily;
      this.priceForMonthToPayment=result.data.carPricesFRentMonthly;
    })
  }
}
