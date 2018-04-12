import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderProfileLinkComponent } from './header-profile-link.component'

describe('HeaderProfileLinkComponent', () => {
  let component: HeaderProfileLinkComponent
  let fixture: ComponentFixture<HeaderProfileLinkComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderProfileLinkComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfileLinkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
