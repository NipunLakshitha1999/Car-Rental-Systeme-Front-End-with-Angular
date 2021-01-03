import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-primiyum-car-rent',
  templateUrl: './primiyum-car-rent.component.html',
  styleUrls: ['./primiyum-car-rent.component.css']
})
export class PrimiyumCarRentComponent implements OnInit {

  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
