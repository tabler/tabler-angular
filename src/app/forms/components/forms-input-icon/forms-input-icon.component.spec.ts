import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputIconComponent } from './forms-input-icon.component';

describe('FormsInputIconComponent', () => {
  let component: FormsInputIconComponent;
  let fixture: ComponentFixture<FormsInputIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsInputIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
