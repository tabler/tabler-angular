import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule, SharedModule } from '@tabler/angular-core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DemoModule } from './demo/demo.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule, AppRoutingModule, DemoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
