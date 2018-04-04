import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMapsGermanyComponent } from './components-maps-germany.component';

describe('ComponentsMapsGermanyComponent', () => {
  let component: ComponentsMapsGermanyComponent;
  let fixture: ComponentFixture<ComponentsMapsGermanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMapsGermanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMapsGermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
