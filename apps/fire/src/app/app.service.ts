import { Injectable } from '@angular/core'
import { UiService } from '@tabler/angular-ui'
import { AuthService } from './auth/services/auth.service'

const defaultUser = {
  name: 'Anonymous',
  email: 'Guest account',
  avatarText: '?',
}
const headerBaseLinks = [
  {
    label: 'Guestbook',
    icon: 'fe fe-book',
    link: '/guestbook',
  },
]
const headerLoggedIn = [
  ...headerBaseLinks,
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
const headerLoggedOut = [
  ...headerBaseLinks,
  {
    label: 'Firebase CRUD',
    icon: 'fa fa-database',
    link: '/crud/beers',
  },
]
const profileLoggedIn = [
  {
    link: '/auth/profile',
    linkClass: 'dropdown-item',
    label: 'Profile',
    icon: 'fe fe-user dropdown-icon',
  },
  {
    link: '/auth/logout',
    linkClass: 'dropdown-item',
    label: 'Log out',
    icon: 'fe fe-log-out dropdown-icon',
  },
]
const profileLoggedOut = [
  {
    link: '/auth/login',
    linkClass: 'dropdown-item',
    label: 'Log in',
    icon: 'fe fe-log-in dropdown-icon',
  },
]

@Injectable()
export class AppService {
  public config$
  constructor(private auth: AuthService, private ui: UiService) {
    this.config$ = ui.config$
    this.auth.user$.map(user => (user ? user : defaultUser)).subscribe(user => this.updateUser(user))
    this.init()
  }

  public updateUser(user) {
    this.ui.profile = user || defaultUser
    this.ui.updateLayout({
      headerNav: user.id ? headerLoggedIn : headerLoggedOut,
      profileNav: user.id ? profileLoggedIn : profileLoggedOut,
    })
  }

  public init() {
    this.ui.appName = 'Firebase Demo'
    this.ui.headerSubNav = [
      {
        label: 'Source Code',
        labelClass: 'd-none d-lg-inline',
        link: 'https://github.com/tabler/tabler-angular/tree/develop/apps/fire/src/app',
        linkClass: 'btn btn-sm btn-outline-primary ml-2',
        icon: 'fe fe-github mr-1',
      },
    ]
    this.ui.footerText = `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>.
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>.
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `
    this.ui.footerNav = [
      {
        label: 'Source Code',
        link: 'https://github.com/tabler/tabler-angular/tree/develop/apps/fire/src/app',
        linkClass: 'btn btn-sm btn-outline-primary ml-2',
        icon: 'fe fe-github mr-2',
      },
    ]
  }
}
