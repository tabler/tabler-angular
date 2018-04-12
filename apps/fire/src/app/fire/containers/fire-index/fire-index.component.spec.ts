import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FireIndexComponent } from './fire-index.component'

describe('FireIndexComponent', () => {
  let component: FireIndexComponent
  let fixture: ComponentFixture<FireIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FireIndexComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FireIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
