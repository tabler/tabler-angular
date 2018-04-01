import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsIndexComponent } from './forms-index.component';

describe('FormsIndexComponent', () => {
  let component: FormsIndexComponent;
  let fixture: ComponentFixture<FormsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
