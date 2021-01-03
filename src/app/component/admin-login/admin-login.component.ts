import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import adminDTO from '../../dto/adminDTO';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private userAdminService: UserService
  ) { }

  adminEmail = '';
  adminPassword = '';

  ngOnInit(): void {
  }

  signInAdmin(): void{

    const admin = new adminDTO(
      this.adminEmail.trim(),
      this.adminPassword.trim()
    )
    console.log(admin)
    this.userAdminService.loginUser(admin).subscribe(result => {
      if (result === true){
        alert('LOGIN SUCCESS');
        this.router.navigate(['/adminComponent'])
      }else {
        alert('LOGIN FAIL');
      }
    });
  }
}
