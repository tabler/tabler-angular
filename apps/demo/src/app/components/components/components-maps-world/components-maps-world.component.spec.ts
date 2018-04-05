import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMapsWorldComponent } from './components-maps-world.component';

describe('ComponentsMapsWorldComponent', () => {
  let component: ComponentsMapsWorldComponent;
  let fixture: ComponentFixture<ComponentsMapsWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMapsWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMapsWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
