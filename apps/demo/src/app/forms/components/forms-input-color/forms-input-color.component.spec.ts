import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsInputColorComponent } from './forms-input-color.component'

describe('FormsInputColorComponent', () => {
  let component: FormsInputColorComponent
  let fixture: ComponentFixture<FormsInputColorComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormsInputColorComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputColorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
