import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCarRentComponent } from './mini-car-rent.component';

describe('MiniCarRentComponent', () => {
  let component: MiniCarRentComponent;
  let fixture: ComponentFixture<MiniCarRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCarRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCarRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
