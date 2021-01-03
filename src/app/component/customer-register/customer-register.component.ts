import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import customerDTO from '../../dto/customerDTO';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private customerService:CustomerService
  ) { }

  customerEmail='';
  customerName='';
  customerAddress='';
  customerContact='';
  customerNIC='';
  customerLisenNo='';
  customerPassword='';
  customerEmailErroState: false;
  customerNameErroState: false;
  customerAddressErroState: false;
  customerContactErroState: false;
  customerNICErroState: false;
  customerLisenErroState: false;
  customerPasswordErroState: false;


  ngOnInit(): void {
  }

  saveCustomer():void{

    if(this.customerEmail.trim().length>0){
      this.customerEmailErroState=false;
    }else {
      // @ts-ignore
      this.customerEmailErroState = true;
      return;
    }

    if (this.customerName.trim(),length>0){
      this.customerNameErroState=false;
    }else {
      // @ts-ignore
      this.customerNameErroState=true;
      return;
    }

    if (this.customerAddress.trim().length>0){
      this.customerAddressErroState=false;
    }else{
      // @ts-ignore
      this.customerAddressErroState=true;
      return;
    }

    if (this.customerContact.trim().length>0){
      this.customerContactErroState=false;
    }else {
      // @ts-ignore
      this.customerContactErroState=true;
      return;
    }
    if (this.customerNIC.trim().length>0){
      this.customerNICErroState=false;
    }else {
      // @ts-ignore
      this.customerNICErroState=true;
      return;
    }
    if (this.customerLisenNo.trim().length>0){
      this.customerLisenErroState=false;
    }else {
      // @ts-ignore
      this.customerLisenErroState=true;
      return;
    }
    if (this.customerPassword.trim().length>0){
      this.customerPasswordErroState=false;
    }else {
      // @ts-ignore
      this.customerPasswordErroState=true;
      return;
    }

    const customer= new customerDTO(
      this.customerEmail.trim(),
      this.customerNIC.trim(),
      this.customerLisenNo.trim(),
      this.customerName.trim(),
      this.customerAddress.trim(),
      this.customerContact.trim(),
      this.customerPassword.trim()
    )

    this.customerService.registerCustomer(customer).subscribe(result=>{
      console.log(result)
      if(result.code==200){
        alert("CUSTMOER ADDED");
      }else {
        alert("CUSTOMER NOT ADDED");
      }
    })
  }

}
