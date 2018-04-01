import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { IndexComponent } from './containers/index/index.component'

const routes: Routes = [
  // { path: '', component: HomeIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ IndexComponent ]
})
export class DemoModule {
}
