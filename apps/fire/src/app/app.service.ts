import { Injectable } from '@angular/core'
import { AuthService } from './auth/services/auth.service'

const defaultUser = {
  name: 'Anonymous',
  email: 'Guest account',
  avatarText: '?',
}
const linkLogin = {
  link: '/auth/login',
  label: 'Log in',
  icon: 'fe fe-log-in',
}
const linkLogout = {
  link: '/auth/logout',
  label: 'Log out',
  icon: 'fe fe-log-out',
}
const linkSource = {
  label: 'Source Code',
  link: 'https://github.com/tabler/tabler-angular/tree/develop/apps/fire/src/app',
  class: 'btn btn-sm btn-outline-primary ml-2',
  icon: 'fe fe-github',
  target: '_blank',
}

@Injectable()
export class AppService {
  /**
   * Config
   * @type {{}}
   * @private
   */
  private _config = {}
  public get config() {
    return this._config
  }
  public set config(config) {
    this._config = config
  }

  /**
   * Title
   * @type {{}}
   * @private
   */
  private _title = 'Fire'
  public set title(title) {
    this._title = title
  }

  /**
   * Menu
   * @type {any[]}
   * @private
   */
  private _menu = []
  public set menu(menu) {
    this._menu = menu
  }

  /**
   * Footer
   * @type {any[]}
   * @private
   */
  private _footer = {}
  public set footer(footer) {
    this._footer = footer
  }
  public get footer() {
    return {
      disclaimer: `
        Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>.
        Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>.
        Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
        MIT Licensed
      `,
    }
  }

  /**
   * IsLoggedIn
   * @type {boolean}
   * @private
   */
  private _isLoggedIn = false
  public get isLoggedIn() {
    return this._isLoggedIn
  }
  public set isLoggedIn(isLoggedIn) {
    this._isLoggedIn = isLoggedIn
  }

  /**
   *
   * @type {{}}
   * @private
   */
  private _user
  private set user(user) {
    // Set the logged in state
    if (user.id) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }

    this._user = user

    this.updateConfig()
  }

  private get user() {
    return this._user
  }

  /**
   * Method that returns Header Config
   * @returns
   */
  private get header() {
    return {
      title: this._title,
      menu: this._menu,
      user: this.user,
      links: [linkSource],
      profileLinks: [this.isLoggedIn ? linkLogout : linkLogin],
    }
  }

  /**
   * Update the config by re-assigning the values
   */
  private updateConfig() {
    this.config = {
      header: this.header,
      footer: this.footer,
    }
  }

  constructor(private auth: AuthService) {
    this.auth.user$.map(user => (user ? user : defaultUser)).subscribe(user => (this.user = user))
  }
}
