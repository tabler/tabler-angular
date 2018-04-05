import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesReadComponent } from './messages-read.component';

describe('MessagesReadComponent', () => {
  let component: MessagesReadComponent;
  let fixture: ComponentFixture<MessagesReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
