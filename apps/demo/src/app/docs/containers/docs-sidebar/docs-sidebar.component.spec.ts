import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSidebarComponent } from './docs-sidebar.component';

describe('DocsSidebarComponent', () => {
  let component: DocsSidebarComponent;
  let fixture: ComponentFixture<DocsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
