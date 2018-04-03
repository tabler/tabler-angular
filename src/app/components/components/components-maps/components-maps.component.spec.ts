import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMapsComponent } from './components-maps.component';

describe('ComponentsMapsComponent', () => {
  let component: ComponentsMapsComponent;
  let fixture: ComponentFixture<ComponentsMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
