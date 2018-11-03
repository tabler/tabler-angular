import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@tabler/angular-core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppService } from './app.service'
import { DemoModule } from './demo/demo.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    DemoModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(app: AppService) {
    app.init()
  }
}
