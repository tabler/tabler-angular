import { Injectable } from '@angular/core'
import { UiService } from '@tabler/angular-ui'
import { AuthService } from './auth/services/auth.service'

const defaultUser = {
  name: 'Anonymous',
  email: 'Guest account',
  avatarText: '?',
}

@Injectable()
export class AppService {
  public config$
  constructor(private auth: AuthService, private ui: UiService) {
    this.config$ = ui.config$
    this.auth.user$.map(user => (user ? user : defaultUser)).subscribe(user => (this.ui.profile = user))
    this.init()
  }
  public init() {
    this.ui.appName = 'Firebase Demo'
    this.ui.headerNav = [
      {
        label: 'Guestbook',
        icon: 'fe fe-book',
        link: '/fire/guestbook',
      },
      {
        label: 'Beers',
        icon: 'fa fa-beer',
        link: '/crud/beers',
      },
      {
        label: 'Notes',
        icon: 'fa fa-pencil-square-o',
        link: '/crud/notes',
      },
    ]
    this.ui.footerText = `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>.
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>.
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `
    this.ui.links.set('logoutLink', {
      link: '/auth/logout',
      label: 'Log out',
      icon: 'fe fe-log-out',
    })
    this.ui.links.set('loginLink', {
      link: '/auth/login',
      label: 'Log in',
      icon: 'fe fe-log-in',
    })
    this.ui.links.set('sourceLink', {
      label: 'Source Code',
      link: 'https://github.com/tabler/tabler-angular/tree/develop/apps/fire/src/app',
      class: 'btn btn-sm btn-outline-primary ml-2',
      icon: 'fe fe-github',
    })
  }
}
