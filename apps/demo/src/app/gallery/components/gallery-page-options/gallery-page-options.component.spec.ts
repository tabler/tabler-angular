import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { GalleryPageOptionsComponent } from './gallery-page-options.component'

describe('GalleryPageOptionsComponent', () => {
  let component: GalleryPageOptionsComponent
  let fixture: ComponentFixture<GalleryPageOptionsComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GalleryPageOptionsComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageOptionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
