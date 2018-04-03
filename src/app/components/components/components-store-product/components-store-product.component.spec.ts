import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsStoreProductComponent } from './components-store-product.component';

describe('ComponentsStoreProductComponent', () => {
  let component: ComponentsStoreProductComponent;
  let fixture: ComponentFixture<ComponentsStoreProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsStoreProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsStoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
