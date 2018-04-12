import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'

import { DocsSectionComponent } from './components/docs-section/docs-section.component'
import { DocsSectionsComponent } from './components/docs-sections/docs-sections.component'
import { DocsChaptersComponent } from './components/docs-chapters/docs-chapters.component'
import { DocsViewerComponent } from './containers/docs-viewer/docs-viewer.component'

@NgModule({
  imports: [SharedModule],
  declarations: [
    DocsChaptersComponent,
    DocsViewerComponent,
    DocsSectionComponent,
    DocsSectionsComponent,
  ],
})
export class DocsViewerModule {}
