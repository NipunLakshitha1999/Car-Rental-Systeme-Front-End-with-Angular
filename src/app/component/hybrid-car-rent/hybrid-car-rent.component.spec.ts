import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridCarRentComponent } from './hybrid-car-rent.component';

describe('HybridCarRentComponent', () => {
  let component: HybridCarRentComponent;
  let fixture: ComponentFixture<HybridCarRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridCarRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridCarRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
