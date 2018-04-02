import { NgModule } from '@angular/core'
import { AppSharedModule } from '../app-shared.module'
import { DemoService } from './services/demo.service'


@NgModule({
  imports: [ AppSharedModule ],
  providers: [ DemoService ]
})
export class DemoModule {
}
