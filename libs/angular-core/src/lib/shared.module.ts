import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@tabler/angular-forms'
import { UiModule } from '@tabler/angular-ui'
import { ModalModule } from 'ngx-bootstrap'

@NgModule({
  imports: [CommonModule, RouterModule, UiModule, FormsModule, ModalModule],
  exports: [CommonModule, RouterModule, UiModule, FormsModule, ModalModule],
})
export class SharedModule {}
