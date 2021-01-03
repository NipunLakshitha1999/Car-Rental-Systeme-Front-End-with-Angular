import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import DriverDTO from '../../dto/driverDTO';
import {DriverService} from '../../service/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driverID: '';
  driverName: '';
  driverAddress: '';
  driverContact: '';
  driverPassword: '';
  driverStatus: '';

  constructor(
    private router:Router,
    private driverService:DriverService
  ) { }

  ngOnInit(): void {
  }

  saveDriver() {
    const driver= new DriverDTO(
      this.driverID.trim(),
      this.driverPassword.trim(),
      this.driverName.trim(),
      this.driverAddress.trim(),
      this.driverContact.trim(),
      this.driverStatus.trim()
    )
    this.driverService.saveDriver(driver).subscribe(result =>{
      if (result.code == 200){
        alert("driver saved");
      }else {
        alert("driver saved failed");
      }
    })

  }

  updateDriver() {

  }

  deleteDriver() {

  }
}
