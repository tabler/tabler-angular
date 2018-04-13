import { Injectable } from '@angular/core'
import { UiLink } from '../modules'
import { Observable } from 'rxjs/Observable'
import { ReplaySubject } from 'rxjs/ReplaySubject'

export class UiNotification {
  from?: string
  text?: string
  avatarText?: string
  date?: any
}

export class UiBadge {
  label: string
  color: string
}

export class UiProfile {
  id?: string
  name?: string
  email?: string
  description?: string
  title?: string
  avatar?: string
  avatarText?: string
  [key: string]: any
}

export class UiLayout {
  appLink?: string
  appLogo?: string
  appName?: string

  headerNav?: UiLink[]
  headerSubNav?: UiLink[]

  profile?: UiProfile
  profileNav?: UiLink[]

  notifications?: UiNotification[]

  footerNav?: UiLink[]
  footerText?: string

  footerSubNav?: [UiLink[]]
  footerSubText?: string
}


@Injectable()
export class UiService {

  private configSubject = new ReplaySubject<UiLayout>()

  private config: UiLayout = {
    appLink: '/',
    appLogo: 'assets/brand/tabler.svg',
    appName: 'Tabler for Angular',
  }

  public config$: Observable<UiLayout> = this.configSubject.asObservable()

  /**
   * Define the link to Home
   * @param {string} link
   */
  public set appLink(link: string) {
    this.config.appLink = link
  }

  /**
   * Set the link to the app logo image
   * @param {string} logo
   */
  public set appLogo(logo: string) {
    this.config.appLogo = logo
  }

  /**
   * Set the app name
   * @param name
   */
  public set appName(name: string) {
    this.config.appName = name
  }

  /**
   * Set the main navigation items
   * @param {UiLink[]} items
   */
  public set headerNav(items: UiLink[]) {
    this.config.headerNav = items
  }

  /**
   * Set the secondary navigation items
   * @param {UiLink[]} items
   */
  public set headerSubNav(items: UiLink[]) {
    this.config.headerSubNav = items
  }

  /**
   * Set the User Profile
   * @param {UiProfile} profile
   */
  public set profile(profile: UiProfile) {
    this.config.profile = profile
  }

  /**
   * Set the links in the user profile menu
   * @param {UiLink[]} items
   */
  public set profileNav(items: UiLink[]) {
    this.config.profileNav = items
  }

  /**
   * Set the notifications items dropdown
   * @param {UiNotification[]} notifications
   */
  public set notifications(notifications: UiNotification[]) {
    this.config.notifications = notifications
  }

  /**
   * Set the Navigation Items in the footer
   * @param {UiLink[]} items
   */
  public set footerNav(items: UiLink[]) {
    this.config.footerNav = items
  }

  /**
   * Set the footer text, good for a copyright/disclaimer message
   * @param {string} text
   */
  public set footerText(text: string) {
    this.config.footerText = text
  }

  /**
   * Set the footer sub navigation.
   *
   * Accepts an Array of UiLink Arrays
   * @param {[UiLink[]]} items
   */
  public set footerSubNav(items: [UiLink[]]) {
    this.config.footerSubNav = items
  }

  /**
   * Set the footer sub text
   * @param {string} text
   */
  public set footerSubText(text: string) {
    this.config.footerSubText = text
  }

  /**
   * Update the config by emitting values
   */
  public updateLayout(config: UiLayout = {}) {
    this.config = Object.assign({}, this.config, config)
    this.configSubject.next(this.config)
  }

  constructor() {
    this.updateLayout()
  }

}
