import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsIconsComponent } from './components-icons.component';

describe('ComponentsIconsComponent', () => {
  let component: ComponentsIconsComponent;
  let fixture: ComponentFixture<ComponentsIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
