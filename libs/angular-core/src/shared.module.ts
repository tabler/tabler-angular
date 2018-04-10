import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UiModule } from '@tabler/angular-ui'
import { ModalModule } from 'ngx-bootstrap'

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  exports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
})
export class SharedModule {
}
