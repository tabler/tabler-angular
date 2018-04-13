import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsJsonComponent } from './docs-json.component';

describe('DocsJsonComponent', () => {
  let component: DocsJsonComponent;
  let fixture: ComponentFixture<DocsJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
