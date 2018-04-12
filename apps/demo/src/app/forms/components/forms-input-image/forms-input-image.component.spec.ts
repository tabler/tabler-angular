import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsInputImageComponent } from './forms-input-image.component'

describe('FormsInputImageComponent', () => {
  let component: FormsInputImageComponent
  let fixture: ComponentFixture<FormsInputImageComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FormsInputImageComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInputImageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
