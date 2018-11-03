import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from './components/button/button.component'
import { ButtonsComponent } from './components/buttons/buttons.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonsComponent],
  exports: [ButtonComponent, ButtonsComponent],
})
export class ButtonModule {}
