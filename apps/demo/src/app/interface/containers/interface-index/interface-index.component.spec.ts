import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { InterfaceIndexComponent } from './interface-index.component'

describe('InterfaceIndexComponent', () => {
  let component: InterfaceIndexComponent
  let fixture: ComponentFixture<InterfaceIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InterfaceIndexComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
