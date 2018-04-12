import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardDigitComponent } from './dashboard-digit.component'

describe('DashboardDigitComponent', () => {
  let component: DashboardDigitComponent
  let fixture: ComponentFixture<DashboardDigitComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardDigitComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDigitComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
