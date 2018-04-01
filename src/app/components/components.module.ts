import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { ComponentsIndexComponent } from './containers/components-index/components-index.component';

const routes: Routes = [
  { path: '', component: ComponentsIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ComponentsIndexComponent]
})
export class ComponentsModule { }
