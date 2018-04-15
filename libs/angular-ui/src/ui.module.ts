import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ModulesModule } from './modules/modules.module'

import { UiService } from './services/ui.service'

@NgModule({
  imports: [CommonModule, ModulesModule],
  exports: [ModulesModule],
  providers: [UiService],
})
export class UiModule {}
