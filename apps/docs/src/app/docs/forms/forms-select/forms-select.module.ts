import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'
import { FormsSelectComponent } from './forms-select.component'

@NgModule({
  imports: [SharedModule],
  declarations: [FormsSelectComponent],
  entryComponents: [FormsSelectComponent],
  exports: [FormsSelectComponent],
})
export class FormsSelectModule {}
