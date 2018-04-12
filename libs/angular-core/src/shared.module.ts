import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@tabler/angular-forms'
import { UiModule } from '@tabler/angular-ui'
import { ModalModule } from 'ngx-bootstrap'

@NgModule({
  imports: [CommonModule, UiModule, FormsModule, ModalModule],
  exports: [CommonModule, UiModule, FormsModule, ModalModule],
})
export class SharedModule {}
