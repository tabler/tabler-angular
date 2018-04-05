import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComposeComponent } from './messages-compose.component';

describe('MessagesComposeComponent', () => {
  let component: MessagesComposeComponent;
  let fixture: ComponentFixture<MessagesComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
