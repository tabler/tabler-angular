import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemProfileComponent } from './gallery-item-profile.component';

describe('GalleryItemProfileComponent', () => {
  let component: GalleryItemProfileComponent;
  let fixture: ComponentFixture<GalleryItemProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
