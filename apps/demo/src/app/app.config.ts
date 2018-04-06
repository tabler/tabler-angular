import { environment } from '../environments/environment'

const headerMenu = [
  {
    name: 'Home',
    icon: 'fe fe-home',
    url: '/home',
  },
  {
    name: 'Interface',
    icon: 'fe fe-box',
    url: '/interface',
    subpages: [
      {
        name: 'Cards design',
        icon: 'fe fe-box',
        url: '/interface/cards'
      },
      {
        name: 'Charts',
        icon: 'fe fe-pie-chart',
        url: '/interface/charts'
      },
      {
        name: 'Pricing cards',
        icon: 'fe fe-dollar-sign',
        url: '/interface/pricing-cards'
      }
    ]
  },
  {
    name: 'Components',
    icon: 'fe fe-calendar',
    url: '/components',
    subpages: [
      {
        name: 'Maps',
        icon: 'fe fe-map-pin',
        url: '/components/maps'
      },
      {
        name: 'Icons',
        icon: 'fe fe-heart',
        url: '/components/icons'
      },
      {
        name: 'Store',
        icon: 'fe fe-shopping-cart',
        url: '/components/store'
      },
      {
        name: 'Blog',
        icon: 'fe fe-shopping-cart',
        url: '/components/blog'
      }
    ],
  },
  {
    name: 'Pages',
    icon: 'fe fe-file',
    url: '/profile',
    subpages: [
      {
        name: 'Profile',
        icon: 'fe fe-user',
        url: '/profile'
      },
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Forgot password',
        url: '/forgot-password'
      },
      {
        name: 'Reset password',
        url: '/reset-password'
      },
      {
        name: '400 error',
        url: '/400'
      },
      {
        name: '401 error',
        url: '/401'
      },
      {
        name: '403 error',
        url: '/403'
      },
      {
        name: '404 error',
        url: '/404'
      },
      {
        name: '500 error',
        url: '/500'
      },
      {
        name: '503 error',
        url: '/503'
      },
      {
        name: 'Email',
        url: '/messages'
      },
      {
        name: 'Empty page',
        url: '/empty'
      }
    ],
  },
  {
    name: 'Forms',
    icon: 'fe fe-check-square',
    url: '/forms'
  },
  {
    name: 'Gallery',
    icon: 'fe fe-image',
    url: '/gallery'
  },
  {
    name: 'Documentation',
    icon: 'fe fe-file-text',
    url: '/docs'
  }
]

const user = {
  name: 'Jane',
  surname: 'Pearson',
  avatar: 'assets/faces/female/25.jpg',
}

const now = new Date().getTime()

const notifications = [ {
  avatarText: 'AB',
  from: 'AB',
  text: 'pushed new commit: Fix page load performance issue.',
  date: now - 10000
}, {
  avatarText: 'AB',
  from: 'AB',
  text: 'started new task: Tabler UI design.',
  date: now - 100000
}, {
  avatarText: 'AB',
  from: 'AB',
  text: 'deployed new version of NodeJS REST Api V3',
  date: now - 1000000
} ]

const sourceCode = {
  label: 'Source Code',
  link: environment.urls.repo,
  class: 'btn btn-sm btn-outline-primary ml-2',
  icon: 'fe fe-github',
  target: '_blank',
}
const documentation = {
  label: 'Documentation',
  link: environment.urls.docs,
  class: 'btn btn-sm btn-outline-success ml-2',
  icon: 'fe fe-info',
}

const profileLinks = [
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
      type: 'primary',
    }
  },
  {
    link: '/messages/compose',
    label: 'New message',
    icon: 'fe fe-send',
  },
  {
    divider: true
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
  },
]

export const AppConfig = {
  header: {
    title: 'Demo',
    menu: headerMenu,
    user,
    notifications,
    links: [ documentation, sourceCode ],
    profileLinks,
  },
  subfooter: {
    links: [],
    description: `Premium and Open Source dashboard template with responsive and high quality UI. For Free!`,
  },
  footer: {
    disclaimer: `
      Copyright © 2018 <a [href]="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `,
    links: [ documentation, sourceCode ],
  }
}
