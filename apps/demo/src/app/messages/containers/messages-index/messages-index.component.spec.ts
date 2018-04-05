import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesIndexComponent } from './messages-index.component';

describe('MessagesIndexComponent', () => {
  let component: MessagesIndexComponent;
  let fixture: ComponentFixture<MessagesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
