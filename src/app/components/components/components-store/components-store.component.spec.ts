import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsStoreComponent } from './components-store.component';

describe('ComponentsStoreComponent', () => {
  let component: ComponentsStoreComponent;
  let fixture: ComponentFixture<ComponentsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
