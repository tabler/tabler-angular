import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DocsIndexComponent } from './docs-index.component'

describe('DocsIndexComponent', () => {
  let component: DocsIndexComponent
  let fixture: ComponentFixture<DocsIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DocsIndexComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
