import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentActivityComponent } from './development-activity.component';

describe('DevelopmentActivityComponent', () => {
  let component: DevelopmentActivityComponent;
  let fixture: ComponentFixture<DevelopmentActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
