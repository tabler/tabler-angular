import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardChartBgComponent } from './dashboard-chart-bg.component'

describe('DashboardChartBgComponent', () => {
  let component: DashboardChartBgComponent
  let fixture: ComponentFixture<DashboardChartBgComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardChartBgComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartBgComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
