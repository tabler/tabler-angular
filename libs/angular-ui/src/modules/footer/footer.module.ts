import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LinkModule } from '../link'
import { FooterComponent } from './components/footer/footer.component'
import { FooterLinksComponent } from './components/footer-links/footer-links.component'

@NgModule({
  imports: [CommonModule, LinkModule],
  declarations: [FooterComponent, FooterLinksComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
