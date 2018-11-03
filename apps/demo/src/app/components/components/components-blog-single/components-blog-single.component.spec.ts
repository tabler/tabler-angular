import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsBlogSingleComponent } from './components-blog-single.component'

describe('ComponentsBlogSingleComponent', () => {
  let component: ComponentsBlogSingleComponent
  let fixture: ComponentFixture<ComponentsBlogSingleComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentsBlogSingleComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBlogSingleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
