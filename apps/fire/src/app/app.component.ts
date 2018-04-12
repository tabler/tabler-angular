import { Component } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  template: `
    <ui-layout [config]="app.config">
      <router-outlet></router-outlet>
    </ui-layout>
  `,
})
export class AppComponent {
  constructor(public app: AppService) {
    app.title = 'Firebase Demo'
    app.menu = [
      {
        name: 'Guestbook',
        icon: 'fe fe-book',
        url: '/fire/guestbook',
      },
      {
        name: 'Profile',
        icon: 'fe fe-user',
        url: '/auth/profile',
      },
      {
        name: 'Beers',
        icon: 'fa fa-beer',
        url: '/crud/beers',
      },
      {
        name: 'Notes',
        icon: 'fa fa-pencil-square-o',
        url: '/crud/notes',
      },
    ]
  }
}
