import { Injectable } from '@angular/core'
import { UiService } from '@tabler/angular-ui'
import { environment } from '../environments/environment'

const sourceCode = {
  label: 'Source Code',
  link: environment.urls.repo,
  class: 'btn btn-sm btn-outline-primary ml-2',
  icon: 'fe fe-github',
  external: true,
}
const documentation = {
  label: 'Documentation',
  link: environment.urls.docs,
  class: 'btn btn-sm btn-outline-success ml-2',
  icon: 'fe fe-info',
  external: true,
}
const fire = {
  label: 'Fire',
  link: environment.urls.fire,
  class: 'btn btn-sm btn-outline-warning ml-2',
  icon: 'fa fa-fire',
  external: true,
}


@Injectable()
export class AppService {
  constructor(private ui: UiService) {
    this.init()
  }
  public init() {
    this.ui.appName = 'Demo'
    this.ui.headerNav = [
      {
        label: 'Home',
        icon: 'fe fe-home',
        link: '/home',
      },
      {
        label: 'Interface',
        icon: 'fe fe-box',
        link: '/interface',
        children: [
          {
            label: 'Cards design',
            icon: 'fe fe-box',
            link: '/interface/cards',
          },
          {
            label: 'Charts',
            icon: 'fe fe-pie-chart',
            link: '/interface/charts',
          },
          {
            label: 'Pricing cards',
            icon: 'fe fe-dollar-sign',
            link: '/interface/pricing-cards',
          },
        ],
      },
      {
        label: 'Components',
        icon: 'fe fe-calendar',
        link: '/components',
        children: [
          {
            label: 'Maps',
            icon: 'fe fe-map-pin',
            link: '/components/maps',
          },
          {
            label: 'Icons',
            icon: 'fe fe-heart',
            link: '/components/icons',
          },
          {
            label: 'Store',
            icon: 'fe fe-shopping-cart',
            link: '/components/store',
          },
          {
            label: 'Blog',
            icon: 'fe fe-shopping-cart',
            link: '/components/blog',
          },
        ],
      },
      {
        label: 'Pages',
        icon: 'fe fe-file',
        link: '/profile',
        children: [
          {
            label: 'Profile',
            icon: 'fe fe-user',
            link: '/profile',
          },
          {
            label: 'Login',
            link: '/login',
          },
          {
            label: 'Register',
            link: '/register',
          },
          {
            label: 'Forgot password',
            link: '/forgot-password',
          },
          {
            label: 'Reset password',
            link: '/reset-password',
          },
          {
            label: '400 error',
            link: '/400',
          },
          {
            label: '401 error',
            link: '/401',
          },
          {
            label: '403 error',
            link: '/403',
          },
          {
            label: '404 error',
            link: '/404',
          },
          {
            label: '500 error',
            link: '/500',
          },
          {
            label: '503 error',
            link: '/503',
          },
          {
            label: 'Email',
            link: '/messages',
          },
          {
            label: 'Empty page',
            link: '/empty',
          },
        ],
      },
      {
        label: 'Forms',
        icon: 'fe fe-check-square',
        link: '/forms',
        children: [
          {
            label: 'Form Elements',
            link: '/forms/elements',
            icon: 'fe fe-check-square',
          },
          {
            label: 'Dynamic Forms',
            link: '/forms/dynamic',
            icon: 'fe fe-check-square',
          }
        ]
      },
      {
        label: 'Gallery',
        icon: 'fe fe-image',
        link: '/gallery',
      },
    ]
    this.ui.headerSubNav = [ fire, documentation, sourceCode ]

    this.ui.profile = {
      label: 'Jane Pearson',
      description: 'Administrator',
      avatar: 'assets/faces/female/25.jpg',
    }
    this.ui.profileNav = [
      {
        link: '/profile',
        label: 'Profile',
        icon: 'fe fe-user',
      },
      {
        link: '/',
        label: 'Settings',
        icon: 'fe fe-settings',
      },
      {
        link: '/messages',
        label: 'Inbox',
        icon: 'fe fe-mail',
        badge: {
          label: '6',
          color: 'primary',
        },
      },
      {
        link: '/messages/compose',
        label: 'New message',
        icon: 'fe fe-send',
      },
      {
        divider: true,
      },
      {
        link: '/',
        label: 'Need help?',
        icon: 'fe fe-help-circle',
      },
      {
        link: '/login',
        label: 'Sign out',
        icon: 'fe fe-log-out',
      }
    ]

    const now = new Date().getTime()
    this.ui.notifications = [
      {
        avatarText: 'AB',
        from: 'AB',
        text: 'pushed new commit: Fix page load performance issue.',
        date: (now - 10000),
      },
      {
        avatarText: 'AB',
        from: 'AB',
        text: 'started new task: Tabler UI design.',
        date: (now - 100000),
      },
      {
        avatarText: 'AB',
        from: 'AB',
        text: 'deployed new version of NodeJS REST Api V3',
        date: (now - 1000000),
      },
    ]

    this.ui.footerSubNav = [ [ documentation ], [ sourceCode ], [ fire ]]
    this.ui.footerSubText = `Premium and Open Source dashboard template with responsive and high quality UI. For Free!`

    this.ui.footerNav = [ documentation, sourceCode]
    this.ui.footerText = `
      Copyright © 2018 <a [href]="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed`
  }
}
