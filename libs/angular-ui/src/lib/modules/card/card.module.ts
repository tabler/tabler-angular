import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CardComponent } from './components/card/card.component'
import { CardBodyComponent } from './components/card-body/card-body.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CardComponent, CardBodyComponent],
  exports: [CardComponent, CardBodyComponent],
})
export class CardModule {}
