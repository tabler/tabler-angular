const headerLinks = [
  {
    name: 'Documentation',
    icon: 'fe fe-file-text',
    url: '/docs',
    subpages: [
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
    ]
  },
]

export const AppConfig = {
  header: {
    links: headerLinks,
  },
  footer: {
    disclaimer: `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `,
    links: [],
  }
}
