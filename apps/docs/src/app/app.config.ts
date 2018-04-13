import { environment } from '../environments/environment'

const sourceCode = {
  label: 'Source Code',
  link: environment.urls.repo,
  class: 'btn btn-sm btn-outline-primary ml-2',
  icon: 'fe fe-github',
  target: '_blank',
}

const liveDemo = {
  label: 'Live Demo',
  link: environment.urls.demo,
  class: 'btn btn-sm btn-outline-success ml-2',
  icon: 'fe fe-globe',
}

export const AppConfig = {
  header: {
    title: 'Documentation',
    logo: 'assets/brand/tabler.svg',
    links: [liveDemo, sourceCode],
  },
  footer: {
    disclaimer: `
      Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
      Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
      Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
      MIT Licensed
    `,
    links: [{ link: '/docs', label: 'Documentation' }, { link: '/faq', label: 'FAQ' }, sourceCode],
  },
}
