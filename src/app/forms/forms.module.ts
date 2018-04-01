import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { FormsIndexComponent } from './containers/forms-index/forms-index.component'

const routes: Routes = [
  { path: '', component: FormsIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ FormsIndexComponent ]
})
export class FormsModule {
}
