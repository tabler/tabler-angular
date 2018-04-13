import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'
import { AlertsBasicComponent } from './alerts-basic.component'

@NgModule({
  imports: [SharedModule],
  declarations: [AlertsBasicComponent],
  entryComponents: [AlertsBasicComponent],
  exports: [AlertsBasicComponent],
})
export class AlertsBasicModule {}
