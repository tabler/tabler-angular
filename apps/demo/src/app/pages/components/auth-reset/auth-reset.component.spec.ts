import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetComponent } from './auth-reset.component';

describe('AuthResetComponent', () => {
  let component: AuthResetComponent;
  let fixture: ComponentFixture<AuthResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
