import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'

@NgModule({
  imports: [CommonModule],
  declarations: [PageComponent, PageTitleComponent],
  exports: [PageComponent, PageTitleComponent],
})
export class PageModule {}
