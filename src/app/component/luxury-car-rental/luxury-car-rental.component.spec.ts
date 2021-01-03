import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryCarRentalComponent } from './luxury-car-rental.component';

describe('LuxuryCarRentalComponent', () => {
  let component: LuxuryCarRentalComponent;
  let fixture: ComponentFixture<LuxuryCarRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryCarRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryCarRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
