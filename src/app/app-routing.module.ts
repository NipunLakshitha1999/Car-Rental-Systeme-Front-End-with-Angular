import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './component/dashbord/dashbord.component';
import {AdminLoginComponent} from './component/admin-login/admin-login.component';
import {CustomerSignInComponent} from './component/customer-sign-in/customer-sign-in.component';
import {CustomerRegisterComponent} from './component/customer-register/customer-register.component';
import {AdminComponent} from './component/admin/admin.component';
import {MiniCarRentComponent} from './component/mini-car-rent/mini-car-rent.component';
import {PrimiyumCarRentComponent} from './component/primiyum-car-rent/primiyum-car-rent.component';
import {DriverComponent} from './component/driver/driver.component';
import {DriverSignInComponent} from './component/driver-sign-in/driver-sign-in.component';
import {DriveSheduleComponent} from './component/drive-shedule/drive-shedule.component';



const routes: Routes = [
  {path: '', component: DashbordComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'customerSignIn', component: CustomerSignInComponent},
  {path:'customerSignUp',component:CustomerRegisterComponent},
  {path:'adminComponent',component:AdminComponent},
  {path:'rentMiniCar',component:MiniCarRentComponent},
  {path:'rentPremiyumCar' ,component:PrimiyumCarRentComponent},
  {path:'addDriver',component:DriverComponent},
  {path:'driver',component:DriverSignInComponent},
  {path:'shedule',component:DriveSheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
