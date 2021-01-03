import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniVanCarRentalComponent } from './mini-van-car-rental.component';

describe('MiniVanCarRentalComponent', () => {
  let component: MiniVanCarRentalComponent;
  let fixture: ComponentFixture<MiniVanCarRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniVanCarRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniVanCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
