import { environment } from '../environments/environment'

const headerMenu = [
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
    title: 'Documentation',
    menu: headerMenu,
    links: [ {
      label: 'Source Code',
      link: environment.urls.repo,
      class: 'btn btn-sm btn-outline-primary ml-2',
      icon: 'fe fe-github',
    }, {
      label: 'Live Demo',
      link: environment.urls.demo,
      class: 'btn btn-sm btn-outline-success ml-2',
      icon: 'fe fe-globe',
    } ],
  },
  footer: {
    disclaimer: `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `,
    links: [
      { link: '/docs', label: 'Documentation'},
      { link: '/faq', label: 'FAQ'},
      {
        label: 'Source Code',
        link: environment.urls.repo,
        class: 'btn btn-sm btn-outline-primary ml-2',
        icon: 'fe fe-github',
      } ],
  }
}
