import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { BadgeModule } from '../badge/badge.module'
import { LinkContentComponent } from './components/link/link-content.component'
import { LinkComponent } from './components/link/link.component'
import { LinksComponent } from './components/links/links.component'

@NgModule({
  imports: [CommonModule, RouterModule, BadgeModule],
  declarations: [LinkComponent, LinkContentComponent, LinksComponent],
  exports: [LinkComponent, LinkContentComponent, LinksComponent],
})
export class LinkModule {}
