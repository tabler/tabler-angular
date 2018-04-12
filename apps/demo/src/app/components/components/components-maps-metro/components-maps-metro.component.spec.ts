import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsMapsMetroComponent } from './components-maps-metro.component'

describe('ComponentsMapsMetroComponent', () => {
  let component: ComponentsMapsMetroComponent
  let fixture: ComponentFixture<ComponentsMapsMetroComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentsMapsMetroComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMapsMetroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
