import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '@tabler/angular-core'

import { PageEmptyComponent } from './containers/page-empty/page-empty.component'

const routes: Routes = [
  { path: 'empty', component: PageEmptyComponent },
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PageEmptyComponent,
  ]
})
export class PagesModule {}
