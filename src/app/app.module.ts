import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashbordComponent} from './component/dashbord/dashbord.component';
import {RouterModule} from '@angular/router';
import {CustomerSignInComponent} from './component/customer-sign-in/customer-sign-in.component';
import {MiniCarRentComponent} from './component/mini-car-rent/mini-car-rent.component';
import {PrimiyumCarRentComponent} from './component/primiyum-car-rent/primiyum-car-rent.component';
import {HybridCarRentComponent} from './component/hybrid-car-rent/hybrid-car-rent.component';
import {LuxuryCarRentalComponent} from './component/luxury-car-rental/luxury-car-rental.component';
import {MiniVanCarRentalComponent} from './component/mini-van-car-rental/mini-van-car-rental.component';
import {VanRentalComponent} from './component/van-rental/van-rental.component';
import {DriverComponent} from './component/driver/driver.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminLoginComponent} from './component/admin-login/admin-login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerRegisterComponent } from './component/customer-register/customer-register.component';
import {CommonModule} from '@angular/common';
import { AdminComponent } from './component/admin/admin.component';
import { DriverSignInComponent } from './component/driver-sign-in/driver-sign-in.component';
import { DriveSheduleComponent } from './component/drive-shedule/drive-shedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    CustomerSignInComponent,
    MiniCarRentComponent,
    PrimiyumCarRentComponent,
    HybridCarRentComponent,
    LuxuryCarRentalComponent,
    MiniVanCarRentalComponent,
    VanRentalComponent,
    DriverComponent,
    AdminLoginComponent,
    CustomerRegisterComponent,
    AdminComponent,
    DriverSignInComponent,
    DriveSheduleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
