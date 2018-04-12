import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsDemoSelectComponent } from './forms-demo-select.component'

describe('FormsDemoSelectComponent', () => {
  let component: FormsDemoSelectComponent
  let fixture: ComponentFixture<FormsDemoSelectComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormsDemoSelectComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDemoSelectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
