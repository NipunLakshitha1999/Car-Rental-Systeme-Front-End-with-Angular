import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanRentalComponent } from './van-rental.component';

describe('VanRentalComponent', () => {
  let component: VanRentalComponent;
  let fixture: ComponentFixture<VanRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
