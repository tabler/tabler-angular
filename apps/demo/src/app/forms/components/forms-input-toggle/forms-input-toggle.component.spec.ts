import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputToggleComponent } from './forms-input-toggle.component';

describe('FormsInputToggleComponent', () => {
  let component: FormsInputToggleComponent;
  let fixture: ComponentFixture<FormsInputToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsInputToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
