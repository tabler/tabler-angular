import { NgModule } from '@angular/core'
import { DocsViewerModule } from '../../../docs-viewer'
import { FormsAdvancedComponent } from './forms-advanced.component'

@NgModule({
  imports: [DocsViewerModule],
  declarations: [FormsAdvancedComponent],
  entryComponents: [FormsAdvancedComponent],
  exports: [FormsAdvancedComponent],
})
export class FormsAdvancedModule {}
