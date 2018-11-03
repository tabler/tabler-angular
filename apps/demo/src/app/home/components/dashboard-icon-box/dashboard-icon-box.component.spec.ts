import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardIconBoxComponent } from './dashboard-icon-box.component'

describe('DashboardIconBoxComponent', () => {
  let component: DashboardIconBoxComponent
  let fixture: ComponentFixture<DashboardIconBoxComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardIconBoxComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIconBoxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
