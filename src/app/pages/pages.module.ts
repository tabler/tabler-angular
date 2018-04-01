import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { PagesIndexComponent } from './containers/pages-index/pages-index.component';

const routes: Routes = [
  { path: '', component: PagesIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PagesIndexComponent]
})
export class PagesModule { }
