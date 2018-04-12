import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GalleryIndexComponent } from './gallery-index.component'

describe('GalleryIndexComponent', () => {
  let component: GalleryIndexComponent
  let fixture: ComponentFixture<GalleryIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GalleryIndexComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
