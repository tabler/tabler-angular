import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsDemoBasicComponent } from './forms-demo-basic.component'

describe('FormsDemoBasicComponent', () => {
  let component: FormsDemoBasicComponent
  let fixture: ComponentFixture<FormsDemoBasicComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormsDemoBasicComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDemoBasicComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
