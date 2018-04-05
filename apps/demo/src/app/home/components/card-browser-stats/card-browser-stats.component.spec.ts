import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBrowserStatsComponent } from './card-browser-stats.component';

describe('CardBrowserStatsComponent', () => {
  let component: CardBrowserStatsComponent;
  let fixture: ComponentFixture<CardBrowserStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBrowserStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBrowserStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
