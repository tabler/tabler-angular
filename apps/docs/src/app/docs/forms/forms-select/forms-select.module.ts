import { NgModule } from '@angular/core'
import { DocsViewerModule } from '../../../docs-viewer'
import { FormsSelectComponent } from './forms-select.component'

@NgModule({
  imports: [DocsViewerModule],
  declarations: [FormsSelectComponent],
  entryComponents: [FormsSelectComponent],
  exports: [FormsSelectComponent],
})
export class FormsSelectModule {}
