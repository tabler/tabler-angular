import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'
import { FormsBasicComponent } from './forms-basic.component'

@NgModule({
  imports: [SharedModule],
  declarations: [FormsBasicComponent],
  entryComponents: [FormsBasicComponent],
  exports: [FormsBasicComponent],
})
export class FormsBasicModule {}
