import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppSharedModule } from '../app-shared.module'
import { InterfaceIndexComponent } from './containers/interface-index/interface-index.component';

const routes: Routes = [
  { path: '', component: InterfaceIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InterfaceIndexComponent]
})
export class InterfaceModule { }
