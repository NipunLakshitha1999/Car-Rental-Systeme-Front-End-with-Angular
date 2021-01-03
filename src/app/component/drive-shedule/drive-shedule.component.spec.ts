import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSheduleComponent } from './drive-shedule.component';

describe('DriveSheduleComponent', () => {
  let component: DriveSheduleComponent;
  let fixture: ComponentFixture<DriveSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveSheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
