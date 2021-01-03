import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DriverSignInComponent} from '../driver-sign-in/driver-sign-in.component';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {DriverService} from '../../service/driver.service';
import DriverSheduleDTO from '../../dto/sheduleDTO';

@Component({
  selector: 'app-drive-shedule',
  templateUrl: './drive-shedule.component.html',
  styleUrls: ['./drive-shedule.component.css']
})
export class DriveSheduleComponent implements OnInit {

  constructor(
    private router:Router,
    private localStorage:LocalStorage,
    private driverService:DriverService
  ) { }

  logDriverEmail:'';
  driverShedule:any[]=[];

  ngOnInit(): void {
    this.localStorage.getItem('name').subscribe((data)=>{
      this.loadAllDataOfDriverShedule(data);
    })

  }

  loadAllDataOfDriverShedule(data):void{
    alert(data);
    alert("method called")
   this.driverService.getAllDriverShedule(data).subscribe(result =>{
     console.log(result)
    this.driverShedule=result.data as string[];
   })
  }
}
