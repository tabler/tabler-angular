import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DevelopmentChartComponent } from './development-chart.component'

describe('DevelopmentChartComponent', () => {
  let component: DevelopmentChartComponent
  let fixture: ComponentFixture<DevelopmentChartComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DevelopmentChartComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
