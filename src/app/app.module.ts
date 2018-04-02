import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppSharedModule } from './app-shared.module'
import { AppComponent } from './app.component'
import { DemoModule } from './demo/demo.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppSharedModule,
    AppRoutingModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
