import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportMaintComponent } from './airport-maint.component';

describe('AirportMaintComponent', () => {
  let component: AirportMaintComponent;
  let fixture: ComponentFixture<AirportMaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportMaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportMaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
