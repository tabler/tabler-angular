import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { AlertModule } from './alert/alert.module'
export { AlertModule } from './alert/alert.module'

import { AvatarModule } from './avatar/avatar.module'
export { AvatarModule } from './avatar/avatar.module'

import { BadgeModule } from './badge/badge.module'
export { BadgeModule } from './badge/badge.module'

import { ButtonModule } from './button/button.module'
export { ButtonModule } from './button/button.module'

import { CardModule } from './card/card.module'
export { CardModule } from './card/card.module'

import { FooterModule } from './footer/footer.module'
export { FooterModule } from './footer/footer.module'

import { HeaderModule } from './header/header.module'
export { HeaderModule } from './header/header.module'

import { LayoutModule } from './layout/layout.module'
export { LayoutModule } from './layout/layout.module'

import { LinkModule } from './link/link.module'
export { LinkModule } from './link/link.module'

import { PageModule } from './page/page.module'
export { PageModule } from './page/page.module'

const uiModules = [
  AlertModule,
  AvatarModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  FooterModule,
  HeaderModule,
  LayoutModule,
  LinkModule,
  PageModule,
]

@NgModule({
  imports: [...uiModules],
  exports: [...uiModules],
})
export class ModulesModule {}
