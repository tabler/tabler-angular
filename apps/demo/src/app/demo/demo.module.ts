import { NgModule } from '@angular/core'
import { SharedModule } from '@tabler/angular-core'
import { DemoService } from './services/demo.service'

@NgModule({
  imports: [ SharedModule ],
  providers: [ DemoService ]
})
export class DemoModule {
}
