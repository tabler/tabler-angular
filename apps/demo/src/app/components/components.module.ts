import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { NgPipesModule } from 'angular-pipes'

import { ComponentsIndexComponent } from './containers/components-index/components-index.component'
import { ComponentsIconsComponent } from './components/components-icons/components-icons.component'
import { ComponentsMapsComponent } from './components/components-maps/components-maps.component'
import { ComponentsStoreComponent } from './components/components-store/components-store.component'
import { ComponentsBlogComponent } from './components/components-blog/components-blog.component'
import { ComponentsIconMapComponent } from './components/components-icon-map/components-icon-map.component'
import { ComponentsStoreListComponent } from './components/components-store-list/components-store-list.component'
import { ComponentsStoreProductComponent } from './components/components-store-product/components-store-product.component'
import { ComponentsBlogSingleComponent } from './components/components-blog-single/components-blog-single.component'
import { ComponentsMapsClientComponent } from './components/components-maps-client/components-maps-client.component'
import { ComponentsMapsGermanyComponent } from './components/components-maps-germany/components-maps-germany.component'
import { ComponentsMapsWorldComponent } from './components/components-maps-world/components-maps-world.component'
import { ComponentsMapsMetroComponent } from './components/components-maps-metro/components-maps-metro.component'

const routes: Routes = [
  {
    path: '',
    component: ComponentsIndexComponent,
    children: [
      { path: '', redirectTo: 'maps', pathMatch: 'full' },
      { path: 'blog', component: ComponentsBlogComponent },
      { path: 'icons', component: ComponentsIconsComponent },
      { path: 'maps', component: ComponentsMapsComponent },
      { path: 'store', component: ComponentsStoreComponent },
    ],
  },
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), NgPipesModule],
  declarations: [
    ComponentsIndexComponent,
    ComponentsIconsComponent,
    ComponentsMapsComponent,
    ComponentsStoreComponent,
    ComponentsBlogComponent,
    ComponentsIconMapComponent,
    ComponentsStoreListComponent,
    ComponentsStoreProductComponent,
    ComponentsBlogSingleComponent,
    ComponentsMapsClientComponent,
    ComponentsMapsGermanyComponent,
    ComponentsMapsWorldComponent,
    ComponentsMapsMetroComponent,
  ],
})
export class ComponentsModule {}
