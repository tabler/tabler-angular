import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DocsChaptersComponent } from './docs-chapters.component'

describe('DocsChaptersComponent', () => {
  let component: DocsChaptersComponent
  let fixture: ComponentFixture<DocsChaptersComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DocsChaptersComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsChaptersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
