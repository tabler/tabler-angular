import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'

import { DocsIndexComponent } from './containers/docs-index/docs-index.component'

const routes: Routes = [ { path: '', component: DocsIndexComponent } ]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DocsIndexComponent,
  ]
})
export class DocsModule {
}
