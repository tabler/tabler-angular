import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemButtonsComponent } from './gallery-item-buttons.component';

describe('GalleryItemButtonsComponent', () => {
  let component: GalleryItemButtonsComponent;
  let fixture: ComponentFixture<GalleryItemButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryItemButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
