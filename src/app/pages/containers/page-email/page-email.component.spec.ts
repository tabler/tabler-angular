import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmailComponent } from './page-email.component';

describe('PageEmailComponent', () => {
  let component: PageEmailComponent;
  let fixture: ComponentFixture<PageEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
