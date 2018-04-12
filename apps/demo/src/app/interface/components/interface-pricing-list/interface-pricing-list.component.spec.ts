import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InterfacePricingListComponent } from './interface-pricing-list.component'

describe('InterfacePricingListComponent', () => {
  let component: InterfacePricingListComponent
  let fixture: ComponentFixture<InterfacePricingListComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InterfacePricingListComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePricingListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
