import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmptyComponent } from './page-empty.component';

describe('PageEmptyComponent', () => {
  let component: PageEmptyComponent;
  let fixture: ComponentFixture<PageEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
