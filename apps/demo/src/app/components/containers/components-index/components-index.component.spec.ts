import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsIndexComponent } from './components-index.component';

describe('ComponentsIndexComponent', () => {
  let component: ComponentsIndexComponent;
  let fixture: ComponentFixture<ComponentsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
