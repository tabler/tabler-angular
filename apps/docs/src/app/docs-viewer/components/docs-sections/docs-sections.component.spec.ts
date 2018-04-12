import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSectionsComponent } from './docs-sections.component';

describe('DocsSectionsComponent', () => {
  let component: DocsSectionsComponent;
  let fixture: ComponentFixture<DocsSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
