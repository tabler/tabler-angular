import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsIconMapComponent } from './components-icon-map.component';

describe('ComponentsIconMapComponent', () => {
  let component: ComponentsIconMapComponent;
  let fixture: ComponentFixture<ComponentsIconMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsIconMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsIconMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
