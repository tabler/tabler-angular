import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InterfaceCardsComponent } from './interface-cards.component'

describe('InterfaceCardsComponent', () => {
  let component: InterfaceCardsComponent
  let fixture: ComponentFixture<InterfaceCardsComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InterfaceCardsComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceCardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
