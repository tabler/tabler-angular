import { NgModule } from '@angular/core'
import { DocsViewerModule } from '../../../docs-viewer'
import { FormsBasicComponent } from './forms-basic.component'

@NgModule({
  imports: [DocsViewerModule],
  declarations: [FormsBasicComponent],
  entryComponents: [FormsBasicComponent],
  exports: [FormsBasicComponent],
})
export class FormsBasicModule {}
