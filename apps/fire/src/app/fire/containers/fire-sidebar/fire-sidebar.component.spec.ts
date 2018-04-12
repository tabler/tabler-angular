import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FireSidebarComponent } from './fire-sidebar.component'

describe('FireSidebarComponent', () => {
  let component: FireSidebarComponent
  let fixture: ComponentFixture<FireSidebarComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FireSidebarComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FireSidebarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
