import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'
import { ButtonsBasicComponent } from './buttons-basic.component'

@NgModule({
  imports: [SharedModule],
  declarations: [ButtonsBasicComponent],
  entryComponents: [ButtonsBasicComponent],
  exports: [ButtonsBasicComponent],
})
export class ButtonsBasicModule {}
