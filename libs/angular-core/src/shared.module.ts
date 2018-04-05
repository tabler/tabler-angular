import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UiModule } from '@tabler/angular-ui'

@NgModule({
  imports: [
    CommonModule,
    UiModule,
  ],
  exports: [
    CommonModule,
    UiModule,
  ],
})
export class SharedModule {
}
