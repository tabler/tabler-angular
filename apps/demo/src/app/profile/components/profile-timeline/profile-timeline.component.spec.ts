import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTimelineComponent } from './profile-timeline.component';

describe('ProfileTimelineComponent', () => {
  let component: ProfileTimelineComponent;
  let fixture: ComponentFixture<ProfileTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
