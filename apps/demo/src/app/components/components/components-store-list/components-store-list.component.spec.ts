import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsStoreListComponent } from './components-store-list.component';

describe('ComponentsStoreListComponent', () => {
  let component: ComponentsStoreListComponent;
  let fixture: ComponentFixture<ComponentsStoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsStoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsStoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
