import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsBlogComponent } from './components-blog.component'

describe('ComponentsBlogComponent', () => {
  let component: ComponentsBlogComponent
  let fixture: ComponentFixture<ComponentsBlogComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentsBlogComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsBlogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
