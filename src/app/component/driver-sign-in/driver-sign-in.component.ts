import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import DriverDTO from '../../dto/driverDTO';
import {DriverService} from '../../service/driver.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-driver-sign-in',
  templateUrl: './driver-sign-in.component.html',
  styleUrls: ['./driver-sign-in.component.css']
})
export class DriverSignInComponent implements OnInit {
  driverEmail: '';
  driverPassword: '';

  constructor(
    private router:Router,
    private driverService:DriverService,
    private localStorage:LocalStorage
  ) { }

  ngOnInit(): void {
  }

  loginDriver() {
    // @ts-ignore
    const driver=new DriverDTO(
      this.driverEmail.trim(),
      this.driverPassword.trim()
    );

    this.driverService.driverLogin(driver).subscribe(result => {
      if (result.code == 200){
        this.localStorage.setItem('name',this.driverEmail).subscribe(()=>{
        });
        alert("driver login successfull");
        this.router.navigate(['/shedule']);
      }else {
        alert("driver login failed");
      }
    })
  }
}
