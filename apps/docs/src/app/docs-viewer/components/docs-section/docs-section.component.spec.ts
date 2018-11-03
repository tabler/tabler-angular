import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSectionComponent } from './docs-section.component';

describe('DocsSectionComponent', () => {
  let component: DocsSectionComponent;
  let fixture: ComponentFixture<DocsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
