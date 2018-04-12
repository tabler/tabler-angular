import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsDemoAdvancedComponent } from './forms-demo-advanced.component'

describe('FormsDemoAdvancedComponent', () => {
  let component: FormsDemoAdvancedComponent
  let fixture: ComponentFixture<FormsDemoAdvancedComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormsDemoAdvancedComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDemoAdvancedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
