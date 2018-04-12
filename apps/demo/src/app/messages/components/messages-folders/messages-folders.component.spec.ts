import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessagesFoldersComponent } from './messages-folders.component'

describe('MessagesFoldersComponent', () => {
  let component: MessagesFoldersComponent
  let fixture: ComponentFixture<MessagesFoldersComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MessagesFoldersComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFoldersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
