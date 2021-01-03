import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import customerLoginDTO from '../../dto/customerLoginDTO';
@Component({
  selector: 'app-customer-sign-in',
  templateUrl: './customer-sign-in.component.html',
  styleUrls: ['./customer-sign-in.component.css']
})
export class CustomerSignInComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private customerService:CustomerService
  ) { }

  CustomerLoginEmailAddress: '';
  CustomerLoginPassword: '';
  ngOnInit(): void {
  }

  signInCustomer():void{
    const customer=new customerLoginDTO(
      this.CustomerLoginEmailAddress.trim(),
      this.CustomerLoginPassword.trim()
    )

    this.customerService.loginCustomer(customer).subscribe(result=>{
      if (result.code == 200){
        alert('CUSTOMER LOGIN SUCCESS');
      }else {
        alert('CUSTOMER LOGIN FAILED');
      }
    })
  }


}
