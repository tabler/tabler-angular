import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ModalModule } from 'ngx-bootstrap'
import { AppSharedModule } from '../app-shared.module'
import { GalleryIndexComponent } from './containers/gallery-index/gallery-index.component'
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component'
import { GalleryListComponent } from './components/gallery-list/gallery-list.component'
import { GalleryPageOptionsComponent } from './components/gallery-page-options/gallery-page-options.component'
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { GalleryItemButtonsComponent } from './components/gallery-item-buttons/gallery-item-buttons.component';
import { GalleryItemProfileComponent } from './components/gallery-item-profile/gallery-item-profile.component'

const routes: Routes = [
  { path: '', component: GalleryIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
  ],
  declarations: [
    GalleryIndexComponent,
    GalleryItemComponent,
    GalleryListComponent,
    GalleryPageOptionsComponent,
    GalleryModalComponent,
    GalleryItemButtonsComponent,
    GalleryItemProfileComponent,
  ],
  entryComponents: [ GalleryModalComponent ]
})
export class GalleryModule {
}
