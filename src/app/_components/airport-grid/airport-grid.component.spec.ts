import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportGridComponent } from './airport-grid.component';

describe('AirportGridComponent', () => {
  let component: AirportGridComponent;
  let fixture: ComponentFixture<AirportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
