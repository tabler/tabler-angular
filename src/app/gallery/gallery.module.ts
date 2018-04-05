import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { GalleryIndexComponent } from './containers/gallery-index/gallery-index.component'

const routes: Routes = [
  { path: '', component: GalleryIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ GalleryIndexComponent ]
})
export class GalleryModule {
}
