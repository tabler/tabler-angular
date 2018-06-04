import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AvatarComponent } from './components/avatar/avatar.component'

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarModule {}
