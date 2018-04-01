import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'

const routes: Routes = [
  // { path: '', component: HomeIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class GalleryModule { }
