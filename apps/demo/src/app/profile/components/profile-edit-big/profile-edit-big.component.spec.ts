import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileEditBigComponent } from './profile-edit-big.component'

describe('ProfileEditBigComponent', () => {
  let component: ProfileEditBigComponent
  let fixture: ComponentFixture<ProfileEditBigComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileEditBigComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditBigComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
