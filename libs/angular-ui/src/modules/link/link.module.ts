import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BadgeModule } from './../../modules/badge'
import { LinkContentComponent } from './components/link/link-content.component'
import { LinkComponent } from './components/link/link.component'

@NgModule({
  imports: [
    CommonModule, RouterModule, BadgeModule
  ],
  declarations: [ LinkComponent, LinkContentComponent ],
  exports: [ LinkComponent, LinkContentComponent ]
})
export class LinkModule {
}
