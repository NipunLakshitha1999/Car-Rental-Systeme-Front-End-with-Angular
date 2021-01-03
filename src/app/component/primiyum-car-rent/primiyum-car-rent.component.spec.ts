import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimiyumCarRentComponent } from './primiyum-car-rent.component';

describe('PrimiyumCarRentComponent', () => {
  let component: PrimiyumCarRentComponent;
  let fixture: ComponentFixture<PrimiyumCarRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimiyumCarRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimiyumCarRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
