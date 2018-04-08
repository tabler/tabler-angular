
const headerMenu = [
  {
    name: 'Guestbook',
    icon: 'fe fe-book',
    url: '/fire/guestbook',
  },
  {
    name: 'Authentication',
    icon: 'fe fe-lock',
    url: '/auth',
  },
]

const user = {
  name: 'Anonymous',
  description: 'Guest user',
  avatarText: '?'
}

export const AppConfig = {
  header: {
    title: 'Fire',
    menu: headerMenu,
    user,
    profileLinks: [
      {
        link: '/login',
        label: 'Log in',
        icon: 'fe fe-log-in',
      },
    ]
  },
  footer: {
    disclaimer: `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `,
  }
}
