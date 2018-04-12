import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'
import { FormsAdvancedComponent } from './forms-advanced.component'

@NgModule({
  imports: [SharedModule],
  declarations: [FormsAdvancedComponent],
  entryComponents: [FormsAdvancedComponent],
  exports: [FormsAdvancedComponent],
})
export class FormsAdvancedModule {}
