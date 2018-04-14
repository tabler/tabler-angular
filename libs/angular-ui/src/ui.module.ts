import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgPipesModule } from 'angular-pipes'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

import { UiService } from './services/ui.service'

import {
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
} from './modules'

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

const exported = [
  ...uiModules,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    BsDropdownModule.forRoot(),
    ...uiModules,
  ],
  declarations: [],
  exports: [
    ...exported,
    NgPipesModule,
  ],
  providers: [UiService],
})
export class UiModule {}
