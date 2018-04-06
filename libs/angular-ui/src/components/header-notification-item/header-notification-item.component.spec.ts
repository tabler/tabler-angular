import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotificationItemComponent } from './header-notification-item.component';

describe('HeaderNotificationItemComponent', () => {
  let component: HeaderNotificationItemComponent;
  let fixture: ComponentFixture<HeaderNotificationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNotificationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
