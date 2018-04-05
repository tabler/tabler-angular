import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceChartsComponent } from './interface-charts.component';

describe('InterfaceChartsComponent', () => {
  let component: InterfaceChartsComponent;
  let fixture: ComponentFixture<InterfaceChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
