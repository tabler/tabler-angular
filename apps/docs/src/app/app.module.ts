import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule, SharedModule } from '@tabler/angular-core'
import { UiService } from '@tabler/angular-ui'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ui: UiService) {
    const sourceCode = {
      label: 'Source Code',
      link: environment.urls.repo,
      linkClass: 'btn btn-sm btn-outline-primary ml-2',
      icon: 'fe fe-github',
    }

    const liveDemo = {
      label: 'Live Demo',
      link: environment.urls.demo,
      linkClass: 'btn btn-sm btn-outline-success ml-2',
      icon: 'fe fe-globe',
    }

    ui.appName = 'Documentation'
    ui.headerSubNav = [liveDemo, sourceCode]
    ui.footerNav = [sourceCode]
    ui.footerText = `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `
  }
}
