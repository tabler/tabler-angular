import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LayoutComponent } from './components/layout/layout.component'
import { LayoutBaseComponent } from './components/layout-base/layout-base.component'
import { HeaderModule } from '../header'
import { FooterModule } from '../footer'

@NgModule({
  imports: [ CommonModule, RouterModule, HeaderModule, FooterModule ],
  declarations: [ LayoutComponent, LayoutBaseComponent ],
  exports: [ LayoutComponent, LayoutBaseComponent ],
})
export class LayoutModule {
}
