import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InterfacePricingComponent } from './interface-pricing.component'

describe('InterfacePricingComponent', () => {
  let component: InterfacePricingComponent
  let fixture: ComponentFixture<InterfacePricingComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InterfacePricingComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePricingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
