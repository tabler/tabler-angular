import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileCardSmallComponent } from './profile-card-small.component'

describe('ProfileCardSmallComponent', () => {
  let component: ProfileCardSmallComponent
  let fixture: ComponentFixture<ProfileCardSmallComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileCardSmallComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardSmallComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
