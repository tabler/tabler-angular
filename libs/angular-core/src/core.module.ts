import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CoreRoutes } from './core-routes.module'
import { SharedModule } from '../src/shared.module'

import { ErrorPageComponent } from './components/error-page/error-page.component'
import { PagesErrorComponent } from './containers/pages-error/pages-error.component'

@NgModule({
  declarations: [PagesErrorComponent, ErrorPageComponent],
  imports: [SharedModule, RouterModule.forRoot(CoreRoutes)],
  exports: [PagesErrorComponent, ErrorPageComponent],
})
export class CoreModule {}
