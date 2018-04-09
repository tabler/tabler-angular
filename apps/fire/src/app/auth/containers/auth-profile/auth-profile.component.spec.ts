import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthProfileComponent } from './auth-profile.component';

describe('AuthProfileComponent', () => {
  let component: AuthProfileComponent;
  let fixture: ComponentFixture<AuthProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
