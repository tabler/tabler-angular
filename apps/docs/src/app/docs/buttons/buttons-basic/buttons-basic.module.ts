import { NgModule } from '@angular/core'
import { DocsViewerModule } from '../../../docs-viewer'
import { ButtonsBasicComponent } from './buttons-basic.component'

@NgModule({
  imports: [DocsViewerModule],
  declarations: [ButtonsBasicComponent],
  entryComponents: [ButtonsBasicComponent],
  exports: [ButtonsBasicComponent],
})
export class ButtonsBasicModule {}
