import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogoutComponent } from './auth-logout.component';

describe('AuthLogoutComponent', () => {
  let component: AuthLogoutComponent;
  let fixture: ComponentFixture<AuthLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
