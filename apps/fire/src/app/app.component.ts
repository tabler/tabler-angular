import { Component } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  template: `
    <ui-layout [config]="app.config">
      <router-outlet></router-outlet>
    </ui-layout>
  `
})
export class AppComponent {
  constructor(public app: AppService) {
    app.title = 'Fire'
    app.menu = [
      {
        name: 'Guestbook',
        icon: 'fe fe-book',
        url: '/fire/guestbook'
      },
      {
        name: 'Authentication',
        icon: 'fe fe-lock',
        url: '/auth'
      }
    ]
  }
}
