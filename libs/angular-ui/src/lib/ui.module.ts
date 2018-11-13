import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ModulesModule } from './modules/modules.module'

import { UiLayout } from '@tabler/angular-ui'

@NgModule({
  imports: [CommonModule, ModulesModule],
  exports: [ModulesModule],
  providers: [UiLayout],
})
export class UiModule {}
