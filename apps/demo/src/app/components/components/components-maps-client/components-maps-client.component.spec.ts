import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ComponentsMapsClientComponent } from './components-maps-client.component'

describe('ComponentsMapsClientComponent', () => {
  let component: ComponentsMapsClientComponent
  let fixture: ComponentFixture<ComponentsMapsClientComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ComponentsMapsClientComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMapsClientComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
