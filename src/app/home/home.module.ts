import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { HomeIndexComponent } from './containers/home-index/home-index.component';
import { DevelopmentActivityComponent } from './components/development-activity/development-activity.component'

const routes: Routes = [
  { path: '', component: HomeIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ HomeIndexComponent, DevelopmentActivityComponent ]
})
export class HomeModule {
}
