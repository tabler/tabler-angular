import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsFormFieldsetComponent } from './forms-form-fieldset.component'

describe('FormsFormFieldsetComponent', () => {
  let component: FormsFormFieldsetComponent
  let fixture: ComponentFixture<FormsFormFieldsetComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormsFormFieldsetComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsFormFieldsetComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
